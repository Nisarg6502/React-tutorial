const num = 1; //primitive type
const num2 = num; //pass by value. Copy is stored

//For objects and arrays, pass by reference is used.
const person = {
    name: 'Max'
}

const secondPerson = person
person.name = 'Manu'
console.log(secondPerson) //Manu will appear due to pass by reference.

//To pass by value in objects we use spread operators
const secondPerson = {
    ...person
}