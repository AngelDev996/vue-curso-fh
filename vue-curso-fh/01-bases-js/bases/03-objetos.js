
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:  {
        ciudad: 'New York',
        zip: 12121,
        lat: 12.33434,
        lng: 12.908892
    }
}


const persona2 = {...persona}//Operador spread, copia un objeto a otro
const persona3 = persona2 //manera incorrecta de copiar un objeto a otro


persona2.nombre = 'Peter'
persona3.nombre = 'Arthur'

console.log(persona);
console.log(persona2);
console.log(persona3);