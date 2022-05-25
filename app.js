//1.Template String...

//Template String : To replace the string concatination operator(+) of the earlier version of Js.

let mobile = {
    brand : 'samsung',
    color : 'red',
    price : 90000,
    EMI : true
};

let msg = 'Brand :' + mobile.brand + ' color :' + mobile.color + ' price :' + mobile.price + ' EMI :' + mobile.EMI;
console.log(msg);


let msg1 = `Brand : ${mobile.brand} color :  ${mobile.color}   price :  ${mobile.price}   EMI : ${mobile.EMI}`;
console.log(msg1);


let template1 = "<ul>"+
                    "<li>"+ mobile.brand +"</li>"
                    "<li>"+ mobile.color +"</li>"
                    "<li>"+ mobile.price +"</li>"
                    "<li>"+ mobile.EMI +"</li>"
                "</ul>"

let template2 = `<ul>
                    <li>${mobile.brand} </li>
                    <li>${mobile.color} </li>
                    <li>${mobile.price} </li>
                    <li>${mobile.EMI} </li>
                </ul>`

//2. Optional Parameters
// sometimes we may pass parameters and sometimes not.....called Optional Parameters..

let greet = function(name, age){
    let msg = `You are ${name} age of ${age}`;
    console.log(msg);
};

greet('swathi',29);

greet(29); //You are 29 age of undefined

greet('swathi'); //You are swathi age of undefined

//To overcome undefined we are using optional parameters

greet = function(name, age = 29){
    let msg = `You are ${name} age of ${age}`;
    console.log(msg);
};


let printNums = function(num1,num2){
    let result = '';
    for(let i = num1; i <= num2 ; i++){
        result += `${i} `;
    }
    console.log(result);

};

printNums(10,20);

// we are making this function as optional parameter.
printNums = function(num1,num2 = 20){
    let result = '';
    for(let i = num1; i <= num2 ; i++){
        result += `${i} `;
    }
    console.log(result);

};

printNums(10);


//Functions : Types
/*
    1. Normal Functions
    2. Function Expressions
    3. Arrow Functions
*/

// 1. Normal Function :

let result ="";
function printNumsNF(){
    let nums = '';
    for(let i = 0; i <= 10; i++){
        nums += `${i} `;
    }
    return nums;
};
result = printNumsNF();
console.log(result);


// 2. Function Expression

let printNumsFE = function(){
    let nums = '';
    for(let i = 0; i <= 10; i++){
        nums += `${i} `;
    }
    return nums;
};
result = printNumsFE();
console.log(result);

//3. Arrow Function

let printNumsAF = () => {
    let nums = '';
    for(let i = 0; i <= 10; i++){
        nums += `${i} `;
    }
    return nums;
};
result = printNumsFE();
console.log(result);

// Usage of Arrow Func

let employees = [{				   
    id : 1,
    age : 40,
    name : "Ravi",
    isActive : true,
    designation : 'Manager'				   
    },    
    {				   
    id : 2,
    age : 29,
    name : "tridha",
    isActive : true,
    designation : 'Engineer'				   
    },    
    {				   
    id : 3,
    age : 20,
    name : "sankar",
    isActive : true,
    designation : 'CEO'				   
    },
    {				   
    id : 4,
    age : 25,
    name : "pradanna",
    isActive : false,
    designation : 'Software'
     }
    ];

//Get the data of employees which age <= 30

 let juniorEmp = employees.filter(function(employees){
    return employees.age <= 30;
});
console.log(juniorEmp);

let jrEmp = employees.filter(employees => employees.age<=30);
console.log(jrEmp);


// In Arrow Function 'this' keyword not working in below example

let student = {
    fname : 'prasanna',
    lname : 'swathi',
    fullName : () => {
      // return `${this.fname} ${this.lname}`;
      return `${student.fname} ${student.lname}`;
    }
};
console.log(student.fullName());

// O/P : undefined undefined

//Types of For-Loops 

// 1. Normal For loop - ES5

let ouptut = '';
for(let i = 0; i <= employees.length-1; i++){
    let empName = employees[i];
    ouptut += `${empName.name.toUpperCase()} `;
}
console.log(ouptut);

//2. For in - ES-5
ouptut = '';
for(let index in employees){
    let empName = employees[index];
    ouptut += `${empName.name.toUpperCase()} `;
}
console.log(ouptut);

//3. for of -ES-6
ouptut = '';
for(let emp of employees){
    ouptut += `${emp.name.toUpperCase()} `;
}
console.log(ouptut);

//4. foreach function - ES5
ouptut = '';
employees.forEach(function(employees){
    ouptut += `${employees.name.toUpperCase()} `;
});
console.log(ouptut);

//foreach-arrow function - ES6
ouptut = '';
employees.forEach(employees => {
    ouptut += `${employees.name.toUpperCase()} `;
});
console.log(ouptut);

//Destructuring - ES6
// let{street city district} = student.address.permanentAddress ;

//Spread Oprator : When we want to pass the values of an array as a functional parameter then we will use this......

let nums = [13,12,26,879,45,1,3543,5,6,3];
//console.log(Math.min(13,12,26,879,45,1,3543,5,6,3));
console.log(Math.min(...nums));


let array1 = ['white','black','red'];
let array2 = ['yellow','pink','green'];
let colors = [...array1 , ...array2];
console.log(colors);





















