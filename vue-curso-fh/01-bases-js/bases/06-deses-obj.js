console.log('Hola mundo');

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
}


// console.log(name);
// console.log(age);
// console.log(codeName);
// console.log(power);



const createHero = ({ name, age, codeName, power = 'No tiene poder' }) =>
({
    id: 129200,
    name,
    age,
    codeName: codeName, //se deja como referencia, pero no es necesario hacerlo
    power
})





console.log(createHero(person));