console.log("Hello world !");

/*===========|| OOP, prototypes, Object.create, instanceof ||========== */

// console.log(new Object);

/*

function Person(name, age){
    this.name = name;
    this.age = age;
    // this.hi = function(){
    //     console.log(`hello ${this.name}`);
    // }
}

Person.prototype.hi = function(){
        console.log(`hello ${this.name}`);
    }

Object.prototype.nimadir = function(){
    
};


let asdf = {
    name:"asdf"
}

// console.log(new Object);

console.log(new Array);
console.log(new String);

const user = new Person("user", 21)
const user2 = new Person("user2", 21)
console.log(user);
user2.hi();

console.clear();

let zokir = {
    name:"Zokir",
    age:21,
    sayHi:function(){
        console.log("hello");
    }
}


 let zokir2 = Object.create(zokir);

 zokir2.name = "kimdir";

 console.log(zokir2.name);



// https://jonas.io;

*/

/*==========||ES6 classes||================== */

/*

function Kimdir3(name, age){
    this.name = name;
    this.age = age
}

const user4 = new Kimdir3("user3", 21);
console.log(user4);

// class declaration

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

     sayHi(){
        console.log(`hello ${this.name}`);
        return this
    }
    goodBye(){
       console.log(`good bye ${this.name}`)
       return this
    }
}

const Firdavs = new Student("Firdavs", 21);
Firdavs.goodBye();

class Teacher extends Student{
    constructor(name, age, skills){
        super(name, age);
        this.skills = skills;
    }
}

const Zokir = new Teacher("Zokir", 21, "bekorchilik")

console.log(Zokir);

const user3 = new Student("zokir", 21);

// user3.sayHi().goodBye();
// user3.goodBye()




// class expression

let Kimdir4 = class{

}
*/