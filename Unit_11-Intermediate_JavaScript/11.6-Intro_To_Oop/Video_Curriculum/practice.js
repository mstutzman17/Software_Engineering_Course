// let user  {
//     name: 'John',
//     role: 'admin',
//     access: 'read-write',

//     addUser(){
//         // Logic to add user
//     }
// },

// removeuser(){
//     // Logic to remove user
// }

// let john = {
//     name: 'John',
//     birthYear: 1990,
//     gender: 'Male',

//     calculatedAge () {
//         return 2021 - this.birthYear;
//     }
// }


// let merry = {
//     name: 'Merry',
//     birthYear: 1995,
//     gender: 'Female',

//     calculatedAge () {
//         return 2021 - this.birthYear;
//     }
// }

// let steve = {
//     name: 'Steve',
//     birthYear: 1985,
//     gender: 'Male',

//     calculatedAge () {
//         return 2021 - this.birthYear;
//     }
// }

// addNumbers(x, y){
//     return x + y;
// }

// addNumbers (x, y, z){
//     return x + y + z;
// }

// addNumbers (10, 20);    // returns 30
// addNumbers (10, 20, 30);    // returns 60

// // Constructor Function

// let Person = function(name, gender, birthYear){
//     this.name = name;
//     this.gneder = gender;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function (){
//     let age = new Date().getFullYear() - this.birthYear;
//     console.log(age);
// }
// Person.prototype.city = 'London';


// let mark = {
//     name: 'Mark',
//     birthYear: 1992,
//     gender: 'Male'
// }
// console.log(mark.hasOwnProperty('name'));

// let john = new Person('John', 'Male', 1990);
// // john.calcAge()
// console.log(john)
// console.log(john.hasOwnProperty('name'))
// let moses = new Person('Moses', 'Male', 1992);
// // moses.calcAge()
// console.log(moses)
// let mom = new Person('Lydia', 'Female', 1971);
// // mom.calcAge()
// console.log(mom)

// let now = new Date();
// let str = new String()

// let arr = [10, 20, 30];
// console.log(arr);

// arr.push()

// let moses = new Person('Moses', 1992, 'Male');

// class Person{
//     constructor(name, gender, birthYear){
//     this.name = name;
//     this.gneder = gender;
//     this.birthYear = birthYear;
//     }
    
// calcAge(){
//         console.log(new Date().getFullYear() - this.birthYear);
//         }
//     }
// Person.prototype.greet = function() {
//     console.log('Hello there, ' +this.name)
// }

// let john = new Person('John', 1990, 'Male');
// console.log(john);
// john.calcAge();
// john.greet();

// let merry = new Person('Merry', 1995, 'Female');
// console.log(merry);
// merry.calcAge();
// merry.greet();

// let john = {
//     name: 'John',
//     birthYear: 1990,
//     annualSalary: 120000,

//     get getName (){
//         return this.name;
//     },

//     set setName(val){
//         this.name = val;
//     }
// }

// console.log(john.getName);
// console.log(john.setName = 'Faclcon Rider')

// let john = {
//     name: 'John',
//     birthYear: 1990,
//     annualSalary: 120000,

//     get getName (){
//         return 'Mr. ' + this.name;
//     }
// }

// console.log(john.getName)

// let john = {
//     name: 'John',
//     birthYear: 1990,
//     annualSalary: 120000,

//    set setName(val){
//     if(val.length < 4){
//         alert('Name should be at least 4 characters long!')
//     } else {
//         this.name = val;
//         }
//     }
// }

// john.setName = 'John Snow'
// console.log(john.getName)

// let User = class{
//     constructor(name, pswd, role){
//         this.name = name;
//         this.password = pswd;
//         this.role = role;
//     }

//     set setPassword(val){
//         if(val.length < 4){
//             console.log('Password should be at least 4 characters long!');
//         } else {
//             this.password = val;
//         }
//     }
// }

// let moses = new User('Moses', 'Tim32liv3!', 'CEO')
// console.log(moses)

// moses.setPassword = 'oldthings'
// console.log(moses)

// class Person{
//     constructor(name, gender, birthYear){
//     this.name = name;
//     this.gneder = gender;
//     this.birthYear = birthYear;
//     }

// calcAge(){
//     console.log(new Date().getFullYear() - this.birthYear);
//         }

//     static greet(){
//         console.log ('Hey there! How are you?');
//     }
//     }

// let moses = new Person('Moses', 1990, 'Male')
// console.log(moses);

// Person.greet()

// let Person = function(name, gender, birthYear){
//     this.name = name;
//     this.gneder = gender;
//     this.birthYear = birthYear;
// }
// Person.prototype.calcAge = function (){
//     let age = new Date().getFullYear() - this.birthYear;
//     console.log(age);
// }
// Person.greet = function(){
//     console.log('Have a nice day!');
// }

// let moses = new Person ('Moses', 'Male', 1992);
// console.log(moses)
// moses.calcAge()
// Person.greet()

// let person = {
//     calcAge(){
//         return new Date().getFullYear() - this.birthYear;
//     },

//     greet(){
//         return 'Have a nice day!';
//     },

//     init(name, birthYear, gender){
//         this.name = name;
//         this.bithYear = birthYear;
//         this.gender = gender;
//     }
// }

// let moses = Object.create(person)
// moses.name= 'Moses'
// moses.birthYear= 1992
// moses.gender= 'Male'
// console.log(moses)
// console.log (moses.calcAge())

// let merry = Object.create(person, {
//     name: {value: 'Mary'},
//     birthYear: {value: 1997},
//     gender: {value: 'Female'}
// })

// let warren = Object.create(person)
// warren.init('Warren', 2015, 'Male');
// console.log(warren);

// let Person = function(name, gender, birthYear){
//     this.name = name;
//     this.gneder = gender;
//     this.birthYear = birthYear;
// }
// Person.prototype.calcAge = function (){
//     let age = new Date().getFullYear() - this.birthYear;
//     console.log(age);
// }

// let Employee = function(name, gender, birthYear, empId, salary){
//     Person.call(this, name, gender, birthYear);
//     this.empId = empId;
//     this.salary = salary;
// }

// Employee.prototype = Person.prototype;

// Employee.prototype.calcSalary = function(){
//     return this.salary * 12;
// }
// Employee.prototype.empDetails = function(){
//     console.log(this.name);
//     console.log(this.empId);
// }

// let moses = new Employee('Moses', 'Male', 1992, 117, 4000)
// console.log(moses);

// class Person {
//     constructor(name, birthYear, gender){
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }
//     calcAge(){
//         console.log(new Date().getFullYear() - this.birthYear);
//     }
// }

// class Employee extends Person{
//     constructor(name, gender, birthYear, empId, salary){
//         super(name, gender, birthYear)
//         this.empId = empId;
//         this.salary = salary;
//     }

//     calcSalary(){
//         return this.salary * 12;
//     }
//     empDetails(){
//         console.log(this.name);
//         console.log(this.empId);
//     }
// }

// let moses = new Employee('Moses', 'Male', 1992, 17, 17000)
// console.log(moses)

let person = {
    calcAge(){
        return new Date().getFullYear() - this.birthYear
    },

    personInit(name, birthYear, gender){
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }
}

let employee = Object.create(person);
employee.employeeInit = function(name, birthYear, gender, empId, salary){
    employee.personInit.call(this, name, birthYear, gender)
    this.empId = empId;
    this.salary = salary;
}

let moses = Object.create(employee)
moses.employeeInit('Moses', 1992, 'Male', 117, 17000)
console.log(moses)