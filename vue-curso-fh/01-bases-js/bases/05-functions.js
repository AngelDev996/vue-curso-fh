
function saludar(nombre){
    return 'Hola '+nombre
}


const nombre = 'Angel'

console.log(saludar(nombre));

const saludar2 = function (nombre){
    return `Hola ${nombre}`
}

const argumento = 'Monika'
console.log(saludar2(nombre));

//Funciones de flecha
const funcionFlecha = (argumento) => {
    return `Hola ${argumento}`
}

console.log(funcionFlecha(argumento));

//Funcion flecha con return implicito
const flechaImplicit = (nombre) => `Hola ${nombre}`

console.log(flechaImplicit(nombre));


const heroes = [{
    id: 1,
    nombre: 'Batman'
},{
    id: 2,
    nombre: 'Superman'
}]

const existe = heroes.some((heroe)=>heroe.id === 1)

console.log(existe);