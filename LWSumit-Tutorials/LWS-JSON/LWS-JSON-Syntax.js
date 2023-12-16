'Use strict'

const person ='{"name":"Tanjim","age":"30","skill":"programming"}'

console.log(person);



//convert object into json

const personTow ={
    fname:'Tanjim',
    lname:'Hasan',
    age:30,
    dateofBirth:'31t Jan 95',
    alive:true,
    disease:null
}

console.log(JSON.stringify(personTow));