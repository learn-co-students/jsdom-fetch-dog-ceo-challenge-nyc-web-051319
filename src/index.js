console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
      function fetchImages(){
        const imageURLs = fetch('https://dog.ceo/api/breeds/image/random/4')
          .then( res => res.json() )
          .then( json => {
            const dogImages = json["message"].forEach(imageURL => {
              const imageContainer = document.querySelector('#dog-image-container')
              const image = document.createElement('img')
              image.setAttribute('src', `${imageURL}`);
              imageContainer.appendChild(image)
            })}
          )
        }
      fetchImages();

      function fetchBreeds() {
        const breeds = fetch('https://dog.ceo/api/breeds/list/all')
          .then(res => res.json() )
          .then( json => {

            // const breedSelector = document.querySelector('#breed-dropdown')
            // breedSelector.addEventListener('select',
            // function(e){
            //   if ((e.target.value) === "a") {
            //     let theAlist = function listOfDogsThatStartWithA() {
            //       Object.keys(json["message"]).filter(dog => dog[0] === "a")
            //     }
            //     const breedBody = document.body
            //     theAlist().forEach(dog =>
            //       const eachDogA = document.createElement('li')
            //       eachDogA.innerText = dog
            //       breedBody.appendChild(eachDogA)
            //     )
            //   }
            // })

            // function check() {
            //  let value = document.getElementById('breed-dropdown').value;
            //  if (value === 'a') {
            //    let theAlist = function listOfDogsThatStartWithA() {
            //       Object.keys(json["message"]).filter(dog => dog[0] === "a")
            //    }
            //    const breedBody = getElementsByTagName("BODY")[0]
            //    theAlist().forEach(dog =>
            //     const eachDogA = document.createElement('li')
            //     eachDogA.innerText = dog
            //     breedBody.appendChild(eachDogA)
            //    )
            //  } else if (value === 'b') {
            //    let theBlist = function listOfDogsThatStartWithB() {
            //       Object.keys(json["message"]).filter(dog => dog[0] === "b")
            //    }
            //  }
            // }

            const dogBreeds = Object.keys(json["message"]).forEach(breed => {
              const dogBreed = document.createElement("li")
              dogBreed.innerText = breed

              dogBreed.addEventListener('click',
              function(e) {
                if (e.target) {
                  e.target.style.color = "green"
                }
              })

              const breedList = document.querySelector('#dog-breeds')
              breedList.appendChild(dogBreed)
            })}
          )
      }
      fetchBreeds();



});
