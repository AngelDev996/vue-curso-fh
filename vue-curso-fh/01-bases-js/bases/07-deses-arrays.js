
const characters = ['Harry', 'Ron', 'Hermione']

const [ha, ro, he, goten='sin valor'] = characters //desestructuracion de arreglo

console.log(ha, ro, he);

const [ , , he2 = 'sin valor'] = characters // cuando solo queremos uno en especifico

console.log(he2);


//desestructura con arrays y arrow functions
const returnArray = () =>{
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()
console.log(letters, numbers);
