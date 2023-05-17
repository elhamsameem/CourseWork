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

    const ul = document.createElement("ul");

    for (let i = 0; i < users.length; i++) {
        const li = document.createElement("li");
        li.innerText(users[i].name);
        ul.appendChild(li);
    }

    root.appendChild(ul);



}

//call the main function
main();