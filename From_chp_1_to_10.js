
        //   Chp 1 Alert

// alert("Hello world!")

        //  Chp 2 Variables 

        // ----------------------------code-----------------------------
//  var username = "Sami";
// console.log(username);
// console.log("Hello My name is : " + username )

// // datatypes in javascript
// var name = "Ali"; //string
// var age = 22 ;   // number
// var isStudent = true ; // boolean
// var stId = null ; // null
// var address = undefined ;  // undefined

// console.log("Student name is :" + name + "\nHaving age :" + age + "\nIs he a student ? " + isStudent + "\nIs there any student id ?" + stId + "\nWhat is the address of that student ?" , address)


// ----------------------------code-----------------------------


// we can also create custom variable that are basically the sum of other variables

// ---------------------------------code---------------------------- //
// var detailsArray = ["Sami" , 21 , null , "Paksitan"] 
// var studentDetails = {
//         name : "Sami" ,
//         age : 21 ,
//         stId : null ,

// }
// console.log(detailsArray) // array 
// console.log(studentDetails) // object
// ---------------------------------code---------------------------- //


        //    Chp 3 Variables for Number


// -------------------------code----------------------------
// var age = 21;
// console.log(age)
// // we can also make increement and decrement in it

// age = age + 1 ;
// console.log("age after increment is :" + age)

// // we can also do the same thing as 
// // but this increment also consider the first increment as the default value
// age++;
// console.log('after increment using ++ operator :' , age)

// -------------------------code----------------------------

        //     chp 4 rules for naming the varibles

// var 12alpha: Not allowed
// var al12pha: allowed
// var my name: Not allowed
// var my_name: allowed
// var my*/name: Not allowed
// var my%name: Not allowed
// var my$name: allowed
// var var = "": Reserved keywords not allowed

    
                //     Chp 5 Math expressions


// (3 + 1) = 4
// (3 - 1) = 2
// 62 / 4 = 15.5
// 15.5 * 8 = 124
// 12 + 124 = 136
// 136 - 2 - 5 = 129

// var equation = 12 + (62 / (3 + 1)) * 8 - (3 - 1) - 5;

// // let make varibale first for brackets having calculated value

// -------------------------------code-----------------------

// var firstBracket =  4 ; // (3 + 1) = 4
// var secondBracket =  2 ; //(3 - 1) = 2
// // now we have to clear the next bracket
// var firstLargeBracket = 62 / firstBracket ; // (62/4) = 15
// // now multiplication
// var mulitplication =  15 * firstLargeBracket ; // 15 * 8 = 120
// // now addition
// var addition =  12 + mulitplication ; // 12 + 120 = 132 
// // now subtraction
// var  subtraction =  - (3-1) - 5 ; // -2 - 5 =  -7
// // now final result
// var finalResult = addition + subtraction ;
// console.log("So the final result is :"+ finalResult) 

// -------------------------------code-----------------------

        //      chp 6 math unfamiliar expression
   
var num = 10;
console.log(num);

console.log("------------Increment-------------")

console.log("post increment:" + num++ ) ; 
console.log("updated value:" + num)
console.log("pre increment:" + ++num);

console.log("------------Decrement-------------")

console.log("post decrement :" + num--);
console.log("updated value" + num);
console.log("pre decrement :" + --num);


            //    Chp 8 Concatination
// we can concatinate strings using + operator

var firstName = "Sami";
var lastName = "Ghouri";
var fullName = ("My name is : " + firstName +" "+ lastName);
console.log(fullName);


                // Chp 9 Prompts 
// we can take the input from the user using the prompt  function

// var userName = prompt("Enter your name :");
// alert("Wellcome " + userName + " to our website!");

// we can also take numeric input from the user using the prompt function and also made some calculations on it

// var number1 = Number(prompt("Enter first number :"));
// var number2 = Number(prompt("Enter second number :"));
// var Addition = number1 + number2 ;
// alert("The addition of " + number1 + " and " + number2 + " is: " + Addition)


               // Chp 10 If else statements
// this are also called conditional statements

// 1)
// var userAge = Number(prompt("Enter your age :"));
// if (userAge  >= 18){
//         alert("You are eligible to vote !");
// }
// else{
//         alert("You are not elgible to vote!")
// }


// 2) 
// making of a simple calculator using if else statement 

var num1 = Number(prompt("Enter First number :"))
var num2 = Number(prompt("Enter Second number :"))
var Choice = prompt("Enter the operation you want to perform : \n +  - * / % Exit")
if(num1 <= 0 || num2 <= 0){
        alert("Negative numbers are not allowed !");
}
else if(Choice === "+"){
        alert("The addition of " + num1 + " and " + num2 +" is " + (num1 + num2));
}
else if(Choice === "-"){
        alert("The subtraction of " + num1 + " and " + num2 +" is " + (num1 - num2));
}
else if(Choice === "*"){
        alert("The multiplication of " + num1 + " and " + num2 +" is " + (num1 * num2));
}
else if(Choice === "/"){
        alert("The division of " + num1 + " and " + num2 +" is " + (num1 / num2));
}
else if(Choice === "%"){
        alert("The remainder of " + num1 + " and " + num2 +" is " + (num1 % num2));
}
else if(Choice === "+"){
        alert("The addition of " + num1 + " and " + num2 +" is " + (num1 + num2));
}

else if(Choice === "Exit"){
        alert("Thanks for visiting")
}
else{
        alert("Invalid Input!")
}