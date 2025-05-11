

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

let persons = [
        { name: "Daniel", age: 29 },
        { name: "Nissa", age: 35 },
        { name: "Oliver", age: 12 },
        { name: "Lily", age: 5 },
        { name: "Sara", age: 40 }
    ];

function personerÖver30(array) {
    array.forEach(person => {
        if (person.age > 30) {
            console.log(person.name);
        }
    });
}
}

module.exports = { uppg8 };