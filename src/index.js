const dogImgContainer = document.querySelector("#dog-image-container")
const dogBreedsList = document.querySelector("#dog-breeds")
const breedDropdown = document.querySelector("#breed-dropdown")
let dogBreeds

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        addImgs(json)
    })

fetch('https://dog.ceo/api/breeds/list/all')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        addBreeds(json)
    })

function addImgs(json) {
    json.message.forEach(element => {
        dogImgContainer.innerHTML += `<img src=${element}>`
    });
}

function addBreeds(json) {
    for (key in json.message){
        if (json.message[key].length === 0) {
            //dogBreedsList.innerHTML += `<li>${key}</li>` 
            const newBreed = document.createElement("li")
            newBreed.innerText = `${key}`
            newBreed.addEventListener('click', function (e) {
                newBreed.style.color = 'red'
            })
            dogBreedsList.appendChild(newBreed)
        }
        else {
            for (name of json.message[key]){
                const newBreed = document.createElement("li")
                newBreed.innerText = `${name} ${key}`
                newBreed.addEventListener('click', function (e) {
                    newBreed.style.color = 'red'
            })
                dogBreedsList.appendChild(newBreed)
            }
        }
    }
    dogBreeds = document.querySelectorAll("li")
}


breedDropdown.addEventListener('change', function (e) {
    if (breedDropdown.value === 'see-all') {
        dogBreeds.forEach(breed => {
            breed.style.display = ""
        })
    }
    else {
        dogBreeds.forEach(breed => {
            if (!breed.innerText.startsWith(breedDropdown.value)){
            breed.style.display = "none"
            }
            else{
                breed.style.display = ""
            }
        })
    }
})