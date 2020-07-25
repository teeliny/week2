//import User from './modules/class';

//var user = new User;

// Variables
const item = document.getElementById("actors");
const api = "https://swapi.dev/api/people/?results";
let displayModal = document.getElementById('displayModal');
let pop = document.getElementsByClassName('close');


//Creating User class
class User {
    constructor(person) {
      this.person = person;
    }

    get userInfo() {
        const {
            name,
            height, 
            gender
        } = this.person

        return {
            name, 
            height, 
            gender
        }
    }
}


// Functions for creating a new Node and append it to the ul
newItem = (element) => document.createElement(element);
appendItem = (parent, child) => parent.appendChild(child);

//Fetching the API and converting it to JSON
fetch(api)
.then((val) => val.json())
.then((data) => {
    
    let persons = data.results;
    persons.map((person, index) => {
        let info = new User(person);
        let value = info.userInfo

        let imageUrl = `https://picsum.photos/300/300?=${index}`;
        let actorArticle = newItem('article');
        let image = newItem('img');
        let name = newItem('p');
        // actorArticle.id = index + 1;

        image.src = imageUrl;
        name.innerHTML = `${person.name}`;

        appendItem(item, actorArticle); //Apending article to the div item
        appendItem(actorArticle, image);
        appendItem(actorArticle, name);


        //
        name.addEventListener("click",  () => {
            displayModal.style.display = "block";
            displayModal.innerHTML = `
                <p>${value.name}</p>
                <p>${value.height}</p>
                <p>${value.gender}</p>
                <button class="closeModal">CLOSE</button>
            `
        })

        window.onclick = function() {
            if (event.target == displayModal) {
                displayModal.style.display = "none";
            }
        }
    })
})

.catch((error) => {
    console.log(error);
});

function closeDialog() {
    x.close();
  }


