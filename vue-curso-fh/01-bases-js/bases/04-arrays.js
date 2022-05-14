const arreglo = [1,2,3,4]

console.log(arreglo)

arreglo.push(5)

console.log(arreglo)

const arreglo2 = [...arreglo]

const arreglo3 = arreglo2.map(function(n){
  return n*4
})

arreglo2.push(2)
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
