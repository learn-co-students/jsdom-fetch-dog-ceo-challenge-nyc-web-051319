console.log('%c HI', 'color: firebrick')

const dogImageContainer = document.querySelector("#dog-image-container")
const breedContainer = document.querySelector("#dog-breeds")
const filterChoice = document.querySelector("#breed-dropdown")

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => {
    const message = json.message
    message.forEach(function(image){
      const imageTag = document.createElement("img");
      imageTag.src = image;
      dogImageContainer.appendChild(imageTag);
    })
  })

  fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
      const message = json.message;
      for (let breed in message){
        if (!message[breed].length){
          const breedListItem = document.createElement("li")
          breedListItem.innerText = breed
          breedListItem.addEventListener('click', (e) => {
            e.target.style = `color: ${'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}`
          })

          breedContainer.appendChild(breedListItem);
        } else {
          let arr = [];
          message[breed].forEach((breedFirstName) => {
            arr.push(`${breedFirstName} ${breed}`)
          })
          for (let i = 0; i < arr.length; i++){
            const breedListItem = document.createElement("li")
            breedListItem.innerText = arr[i];
            breedListItem.addEventListener('click', (e) => {
              e.target.style = `color: ${'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}`
            })
            breedContainer.appendChild(breedListItem);
          }
        }
      }
    }
    )

  filterChoice.addEventListener('change', (e) => {
    const letter = e.target.value;
    const dogsList = document.querySelectorAll("li");
    for (let i = 0; i < dogsList.length; i++) {
      if (dogsList[i].innerText.charAt(0) !== letter) {
        dogsList[i].hidden = true;
      } else {
        dogsList[i].hidden = false;
      }
    }
  })
