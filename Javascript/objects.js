const person={
    firstName:'john',
    lastName:'kumhuj',
    age:24,

    fullname:function(){
        return this.firstName+" "+this.lastName;
    }
}
// console.log(person.firstName);
// console.log(person.fullname());
// let fname=person.fullname();
// console.log(fname);
// console.log(person.age);

//Adding new property
person.nationality='india';
//Deleting
delete person.fullname;

let details="";
for(let p in person){
    
    details=details+person[p]+" "
}

// console.log(details);

//Nested objects
const person1={
    firstName:'bby',
    lastName:'bmk',
    age:22,
    cars:{
        car1:'lambo',
        car2:'porche',
        car3:'gtr'
    }
}
//ACCESING
// let favCar=person1.cars.car3;
// let leastFav=person1.cars.car1;

// function displayTaste(favCar,leastFav){
//     return favCar+" "+leastFav;
// }
// console.log(displayTaste(favCar,leastFav));

// const richPerson={
//     firstName:'virat',
//     lastName:'kohli',
//     age:30,
//     cars:[
//         {name:'bmw',models:['bmwp1','bmwp2','bmwp3']},
//         {name:'lambo',models:['lambog1','lambog2','lambog3']}
//     ]
// }
//first acces
// let fname=person.firstName+" "+person.lastName;
// let firstCar=person.cars[0].models[0];

//Full objet-
// let objDet="";
// for(let i in richPerson){
//     console.log(richPerson[i])+" "
// }

// let x="";
// for(let i in richPerson.cars){
//    x+="<h2>"+ richPerson.cars[i].name +"</h2>";
//     for(let j in richPerson.cars[i].models){
//         x+=richPerson.cars[i].name +"<br>"
//     }
// }
// console.log(fname);
// console.log(firstCar);
// console.log(objDet);

//Methods
const wifeName="anushka";
const person2={
    name:'virat',
    lastName:'kohli',
    child1:'vamika',
    child2:'akaay'
}
person2.childerns=function(){
    return this.child1+" "+this.child2;
}
console.log(person2.childerns())