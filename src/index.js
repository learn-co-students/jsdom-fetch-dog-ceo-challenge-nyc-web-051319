console.log('%c HI', 'color: firebrick')

const imageContainer = document.querySelector("#dog-image-container")

function fetchData() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => {
  json["message"].forEach(function(element){
    imageContainer.innerHTML += `<img src=${element}>`
    })
  })
}

fetchData()

const dogBreeds = document.querySelector("#dog-breeds")

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => {
    dogBreeds.innerHTML = ""
    for(const key in json["message"]){
      // iterating through the hash with for..in
      dogBreeds.innerHTML += `<li>${key}</li>`
      dogBreeds.addEventListener('click', function(e){
        e.target.style.color = "red"
      })
    }
  })
}

fetchBreeds()

const dropdown = document.querySelector("#breed-dropdown")

dropdown.addEventListener('change', function(e) {
  let letter = e.target.value;

  function fetchDogsAndFilter(letter) {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
      dogBreeds.innerHTML = ""

      for(const key in json["message"]){
        if (key[0] === letter)
          dogBreeds.innerHTML += `<li>${key}</li>`
          dogBreeds.addEventListener('click', function(e){
            e.target.style.color = "red"
          })
      }
    })
  }
  fetchDogsAndFilter(letter)
})
