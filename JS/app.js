// Day16 Problems
// problem1 
let favoriteBooks=["First Circle", "Bible","Lord of the Rings", "All creatures Great and Small","Les Miserables"];
favoriteBooks.push("AnnFrank");
console.log(favoriteBooks);
favoriteBooks.pop();
console.log(favoriteBooks);
favoriteBooks.unshift("The Hobbit");
console.log(favoriteBooks);
favoriteBooks.shift();
console.log(favoriteBooks);
// problem2
let colors=["blue", "Red", "black", "Indigo"];
// colors.slice([3]);
// console.log(colors);
colors.pop();
let poppedElement=colors.pop();
console.log(poppedElement);

// problem3
let names=["Joseph", "Lisa","Susan","Jacob", "John",];
for (i=0; i < names.length; i++){
    if(name[i]==="Susan"){
     console.log(`Hello, ${names[i]}!`);
}
}
for (name of names){
    console.log(`Hello,${name}!` );
}
// Day18 Objects
// Problem1
let student={
    fName:"Charlie",
    lName:"Brown",
    Age:10,
    Grade:"4th"
}
console.log(`The students name is ${student.fName}${student.lName} and He is in the ${student.Grade} grade.`);
console.log(student);
// Problem2
let myStudents={
    fName:"Linus",
    lName:"Brown",
    age:23,
    testGrade:"A"
}
myStudents.testGrade="A+"
console.log(myStudents.testGrade);
myStudents.University="University of Southern Mississippi";
console.log(myStudents);
// problem3
let Vehicle={
    Make:"Jeep",
    Model:"Trailblazer",
    Year:2024
}
Vehicle['color']='red';
let propertyName="Model";
console.log("Model:", Vehicle["propertyName"]);

console.log(Vehicle.color);
console.log("Dynamic Access - Model:", Vehicle[propertyName]); 
// examples

let favoriteBooks = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "The Catcher in the Rye"];
console.log("First Book:",favoriteBooks[0]);
console.log("Last Books:",favoriteBooks[favoriteBooks.length-1]);