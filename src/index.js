// Variables
const item = document.getElementById("actors");
const api = "https://swapi.dev/api/people/?results";

// Functions for creating a new Node and append it to the ul
newItem = (element) => document.createElement(element);
appendItem = (parent, child) => parent.appendChild(child);

fetch(api)
.then((val) => val.json())
.then((data) => {
    
    let persons = data.results;
    return persons.map((person, index) => {
        let imageUrl = `https://picsum.photos/300/300?=${index}`;
        let image = newItem('img');
        let li = newItem('li');
        let name = newItem('p');
        //let mass = newItem('p');

        image.src = imageUrl;
        name.innerHTML = `${person.name}`
        //mass.innerHTML = `${person.mass}`

        appendItem(item, li);
        appendItem(li, image);
        appendItem(li, name);
        //appendItem(li, mass);
    })
})

.catch((error) => {
    console.log("failed to load the API");
});


