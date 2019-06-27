const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImgContainer = document.querySelector("#dog-image-container")
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreedContainer = document.querySelector("#dog-breeds")
const dogBreedArray = []
const breeDropDown = document.querySelectorAll(".filter")
const breedSelector = document.querySelector("#breed-dropdown")
function fetchImgs(imgUrl){
  fetch(imgUrl)
    .then(response => response.json())
    .then(dogData =>
      dogData.message.forEach(dogImgUrl => {
        renderImg(dogImgUrl)
  }))
}

function renderImg(dogImgUrl){
  const imageTag = document.createElement("img")
  imageTag.src = dogImgUrl
  dogImgContainer.appendChild(imageTag)

}

// challenge 1

function fetchBreed(breedUrl){
  fetch(breedUrl)
    .then(response => response.json())
    .then(breedData => {
      renderBreed(breedData)}
    )
}

function renderBreed(breedData){
  for (const key in breedData.message) {
    const breedLi = document.createElement("li")
    breedLi.innerText = key
    dogBreedContainer.appendChild(breedLi)
    dogBreedArray.push(breedLi.innerText)
  }
}
// challenge 2

dogBreedContainer.addEventListener("click", e => {
  e.target.style.color = "red"
})

//challeng 3



fetchImgs(imgUrl)
fetchBreed(breedUrl)

function filter(letter){
    const filtera =  dogBreedArray.filter( breed => (breed.startsWith(letter)))
    filtera.forEach(breed => {
      dogBreedContainer.innerHTML += `
      <li>${breed}</li>
      `
  })
}

breedSelector.addEventListener("change", e => {
  console.log(e.target.value);
    dogBreedContainer.innerHTML = ''
    filter(e.target.value);
})
