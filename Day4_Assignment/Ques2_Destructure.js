console.log("Destructure the object");

const student={
    name:'Helsinki',
    age:24,
    projects:{
        dicegame:"Two player dice game using Javascript",
    }
}

const {name,age,projects:{dicegame}}=student;

console.log(`Name : ${name} Age : ${age} Projects : ${dicegame}`);