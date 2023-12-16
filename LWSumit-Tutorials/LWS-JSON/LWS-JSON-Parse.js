const jsonString ='{"name":"tanjim", "age":30, "birth":"1995-01-31", "skill":"Programming", "city":"Chittagong", "alive":true, "disease":null}';

console.log(jsonString);


const myObj = JSON.parse(jsonString, function(key, value){
if(key === 'birth'){
    return new Date(value)
}
return value
});

console.log(myObj);

// console.log(new Date(myObj.birth));





//converting json to an array

const jsonArray = '["Toyota", "BMW", "Audi", "Fiat"]';

console.log(jsonArray);

const myArray = JSON.parse(jsonArray);

console.log(myArray);