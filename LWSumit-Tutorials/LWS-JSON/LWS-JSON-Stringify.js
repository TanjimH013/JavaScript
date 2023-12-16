'Use strict'

// convert array
const myArray = ['Lamborghini','Ferrari','BMW','Mercedes','Ford','Porsche','Audi',]

const myJson = JSON.stringify(myArray)
console.log(myJson);

//convert object into json

const personTow ={
    fname:'Tanjim',
    lname:'Hasan',
    age:30,
    dateofBirth:'31t Jan 95',
    alive:true,
    disease:null
}

const jsonObj = JSON.stringify(personTow)

console.log(jsonObj);