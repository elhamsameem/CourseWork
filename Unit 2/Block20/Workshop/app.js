const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {

    const root = document.getElementById("root"); //grab the first div in body tag
    const h1 = document.createElement("h1"); //create h1 tag
    h1.innerText = "FREELANCERS"; //puts the test in h1 tag
    root.appendChild(h1); //puts h1 inside of root div

    const container = document.createElement("div"); //container to keep ul and images
    container.setAttribute("id", "container"); //giving ID to the container

    const imgcontainer = document.createElement("div"); //container to keep images
    imgcontainer.setAttribute("id", "imgcontainer"); //giving ID to the container

    const ul = document.createElement("ul"); //creating ul element 

    //using a loop to create li
    for (let i = 0; i < users.length; i++) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = `./asset/${i}.jpg`;
        li.setAttribute("id", `li${i}`); //give id to li starting with li0 upto li7
        li.innerText = `Name: ${users[i].name}\nAge: ${users[i].age} \nOccupation: ${users[i].occupation}`;

        ul.appendChild(li);
        // ul.appendChild (img);
        imgcontainer.appendChild(img);
    }

    container.appendChild(ul);
    container.appendChild(imgcontainer);
    root.appendChild(container);



}

//call the main function
main();