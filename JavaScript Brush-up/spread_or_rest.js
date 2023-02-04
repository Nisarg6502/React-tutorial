//Spread: Used to split up array elements OR object properties

//Rest: Used to merge a list of function arguments into an array

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
    name: 'Max'
}

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));