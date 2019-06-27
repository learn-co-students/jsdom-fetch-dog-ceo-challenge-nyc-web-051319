const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function dogPix() {
    fetch(imgUrl)
        .then(res => res.json())
        .then(json => renderDogs(json))
}

function dogBreeds() {
    fetch(breedUrl)
        .then(res => res.json())
        .then(json => renderBreeds(json))
}

function renderDogs(json) {
    const dogPicContainer = document.querySelector('#dog-image-container')
    json.message.forEach(dogImgUrl => {
        const img = document.createElement('img')
        img.src = dogImgUrl
        dogPicContainer.appendChild(img)
    });
}

function renderBreeds(json) {
    const dogBreedContainer = document.querySelector('#dog-breeds')
    const dogBreedNames = json.message
    for (key in dogBreedNames) {
        if (dogBreedNames.length === 0) {
            const li = document.createElement('li')
            li.innerHTML = `${key}`
            dogBreedContainer.appendChild(li)
        } else {
            const li = document.createElement('li')
            li.innerHTML = `${dogBreedNames[key]} ${key}`
            dogBreedContainer.appendChild(li)
        }

    }
}


document.addEventListener('DOMContentLoaded', function () {
    const dogBreedContainer = document.querySelector('#dog-breeds')
    const alphabetDropper = document.querySelector('#breed-dropdown')
    dogPix()
    dogBreeds()
    dogBreedContainer.addEventListener('click', function(e) {
        if(e.target.tagName === 'LI') {
            e.target.style.color = '#f00'
        }
    })



    function fetchAndFilterDogs(letter) {
        fetch(breedUrl)
        .then(res => res.json())
        .then(dogBreedNames => {
           for (let key in dogBreedNames){
               if (key === "message"){
                 console.log(typeof dogBreedNames[key])
                 for(let dog in dogBreedNames["message"]){
                     console.log(dog)
                     if (dog[0].includes(letter)) {
                    //  we need a function or something to render each dog
                    const li = document.createElement('li')
                    li.innerText = dog
                    dogBreedContainer.appendChild(li)

                     }
                 }
               }
           }
        })
    }

    alphabetDropper.addEventListener('change', function(e) {

        let clickValue = e.target.value
        const allDogs = document.querySelector('#dog-breeds')
        allDogs.innerHTML = ''
        fetchAndFilterDogs(clickValue)
        // const filteredDogs = allDogs.filter(dogLetter => dogLetter.innerText[0] === clickValue)
        // SET THE DAMN NEW DOGS AS THE DAMN NEW LIST
        //    filteredDogs.forEach(newDog => {
            //            })
        })
        
        
    })
    
    console.log('%c HI', 'color: firebrick')
    // const dogNum = Array.from(allDogs).length
    // let dogArr = []
    // for(let i =0; i < dogMum; i++) {
    //     dogArr.push(allDogs[i].innerText)
    // }