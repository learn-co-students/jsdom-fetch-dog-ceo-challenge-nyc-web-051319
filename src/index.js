const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const imgContainer = document.querySelector('#dog-image-container')

fetch(imgUrl)
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    // console.log(json['message'])
    json['message'].forEach(function(img){
      const imgTag = document.createElement('img')
      imgContainer.appendChild(imgTag)
      imgTag.src = img
    })
  })

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedContainer = document.querySelector('#dog-breeds')

fetch(breedUrl)
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    Object.keys(json['message']).forEach(function(breed){
      const listTag = document.createElement('li')
      breedContainer.appendChild(listTag)
      listTag.innerText = breed
      listTag.addEventListener('click', function(){
        listTag.style.color = 'red'
      })
    })
    dogBreeds = document.querySelectorAll('li')
  })

const dropDown = document.querySelector('#breed-dropdown')

dropDown.addEventListener('change', function(){
  dogBreeds.forEach(function(breed){
    console.log(dropDown.value)
    if (breed.innerText[0] != dropDown.value){
      breed.style.display = "none"
    }
    else if (breed.style.display = "none"){
      breed.style.display = "block"
    }
  })
})
