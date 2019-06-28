console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', (e) => {
  const breedsContainer = document.querySelector('#dog-breeds')
  const imageContainer = document.querySelector('#dog-image-container')
  const filterBreed = document.querySelector('#breed-dropdown')
  let breeds;

  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderImages(json))

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => renderBreeds(json))

  function renderImages(json) {
    json.message.forEach(function(image) {
      imageContainer.innerHTML += `<img src="${image}" />`
    })
  }

  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  letters.forEach(function(letter) {
    const option = document.createElement('option')
    option.value = letter
    option.innerText = letter
    filterBreed.appendChild(option)
  })

  function renderBreeds(json) {
    for (const breed in json.message) {
      breedsContainer.innerHTML += `<li>${breed}</li>`
    }
    breeds = document.querySelectorAll('li')
  }

  breedsContainer.addEventListener('click', function(e) {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.color = `${color}`
  })

  filterBreed.addEventListener('change', function(e) {
    let breedArr = Array.from(breeds)
    const filtered = breedArr.filter(breed => {
      return breed.innerText.startsWith(filterBreed.value)
    })
    const breedNames = filtered.map(function(breed) {
      return breed.textContent
    })
    filterBreeds(breedNames)
  })

  function filterBreeds(breeds) {
    breedsContainer.innerHTML = ""
    console.log(breeds);
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
      for (const breed in json.message) {
        if (breeds.includes(breed)) {
          breedsContainer.innerHTML += `<li> ${breed} </li>`
        }
      }
    })
  }

});
