
// Variables
const item = document.getElementById("actors");
const api = "https://swapi.dev/api/people/?results";
let displayModal = document.getElementById('displayModal');
let pop = document.getElementsByClassName('close');


//Creating User class with user property
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

// Functions for creating a new Node(newItem) and append 
//it to the article tag in the index.html file using appendItem
newItem = (element) => document.createElement(element);
appendItem = (parent, child) => parent.appendChild(child);

//Fetching the API and converting it to JSON
fetch(api)
.then((val) => val.json())
.then((data) => {
    
    //Assigning the fetch data to a variable. 
    let persons = data.results;

    //Instantiating a new class and mapping the details of individual character from the data
    persons.map((person, index) => {
        let info = new User(person);

        //Initializing a new variable and extract the required values as stated in the method
        let value = info.userInfo;

        //Assigning image api for dummy(random) images for each characters to a variable
        let imageAPI = `https://loremflickr.com/250/250?=${index}`;    

        //Creating new article tag along with the random image and the p tag for the name of that character
        let actorArticle = newItem('article');
        let randomImage = newItem('img');
        let name = newItem('p');
    
        name.innerHTML = `${person.name}`; //Populating the p tag with the character name

        randomImage.src = imageAPI; //Assigning the image API to the source of the random image
        

        //Apending article to the div item as well as random image and character name to the article tag
        appendItem(item, actorArticle); 
        appendItem(actorArticle, randomImage);
        appendItem(actorArticle, name);


        //Add an event listening on the name of the character
        name.addEventListener("click",  (e) => {
            e.preventDefault();
            displayModal.style.display = "block";

            //Creating a div in the displayModal along with the same random 
            //image and other relevant information of the character
            displayModal.innerHTML = `
            <div class="modal__content">
                <h2>STAR WARS LEGEND</h2>
                <img class="profile__image" src="${imageAPI}" alt=""/>
                <p class="name">Name: <strong>${value.name}</strong></p>
                <p class="height">Height: <strong>${value.height}</strong></p>
                <p class="gender">Gender: <strong>${value.gender}</strong></p>
                <button class="closeModal">CLOSE</button>
                </div>
            `
                    //Creating an onclick function to close the modal.
            let close = document.querySelector('.closeModal')
            close.onclick = () => {
                displayModal.style.display = 'none'
            }
        }) 

    })

            
})

.catch((error) => {
    console.log(error);
});
