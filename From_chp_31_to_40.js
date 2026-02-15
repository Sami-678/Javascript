
// Chp 31 
// getting current date and time
// const date = new Date();
// console.log(date)

// as it return 
//  Mon Feb 09 2026 14:17:16 GMT+0500 (Pakistan Standard Time)
// where 
//, GMT (Greenwich Mean Time) , a standard point or coordinate from where the sunlight measure after the rise of sun and at that point the GMT is 0
//. as there is mentioned GMT 0500 , means we are 5 hours away from gmt

//. we can also access the date , day , month etc

// var justDate = date.getDate();
// console.log(justDate) // as it gaves the current date 

// . we can also access the day 
// var justDay = date.getDay();
// console.log(justDay) // it gaves 1 (mon) , as this method calculate the day from 0 to 6 , 
// . sequence may vary but the number couldn't

// 1
// access the number of day from 0 to 6 using array

// const dayArray = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];
// const newDate= new Date();
// const onlyDate = newDate.getDay(dayArray);
// console.log(onlyDate)

// 2
// access the day also 
// const dayArray1 = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];
// const newDate1= new Date();
// const onlyDate1 = newDate1.getDay(dayArray1);
// console.log(dayArray1[onlyDate1])

//   Chp 32
// extracting the parts from the date 
// we can also extract the parts from the date
// const all = new Date();
// console.log(all)

// var extractingDay = all.getDay();
// var extractingDate = all.getDate();
// var extractingMonth = all.getMonth();
// var extractingFullYear = all.getFullYear();
// var extractingHours = all.getHours(); //24 hours format
// var extractingTime = all.getTime(); // the time metioned here is btw 1970 till 2026 in millisec
// var extractingSeconds = all.getSeconds();

// console.log("Day : " , extractingDay ,"\nDate" , extractingDate, "\nMonth" , extractingMonth , "\nFullYear" , extractingFullYear, "\nHours" , extractingHours , "\nTime" , extractingTime , "\nSeconds" , extractingSeconds  );



// Chp 33
// specifying a date and time
// 1
// for the date and whole in our system
//  var today = new Date();
// //  for custom time
// var fixDate = new Date("19-Sep-2004");
// // we convert it into string for the visiblity
// var fixDateString = fixDate.toString();
// console.log(today , fixDateString)

// 2
// for time

// var currDate = today.getDate();
// console.log(currDate)



//   Chp 34 
// changing elements of a date and time
// var today = new Date();
// console.log(today) // as its type is object 
// // convert it into string
// var stringToday = today.toString();
// console.log(stringToday) // as its type is string 

// // get the full year from today 
//  var fetchingYear = today.getFullYear();
//  console.log(fetchingYear)

// //  set the year
// var newYear = fetchingYear.setFullYear(2004);
// console.log(newYear)

// ------------------------practising date-------------------------

//1 printing the date , it defines the complete date , day in the local machiene
// const date = new Date();
// console.log(date) //it returns as output [Sun Feb 15 2026 13:06:13 GMT+0500 (Pakistan Standard Time)]

// 2. convert the date into string to get it elements 
// const dateString = date.toString();
// console.log(dateString ,"\n", typeof dateString)
// 3
// we can also extract all the date , day, hour etc uisng slice 
// const justDay = dateString.slice(0,2)
// console.log(justDay)

// 4. 
// it print the day and month are in the form of number from 0(sun) to 6(sat)
// const onlyDay = date.getDay();
// const onlyDate = date.getDate();
// const onlyYear = date.getFullYear();
// const onlyHours = date.getHours();
// const onlyMs = date.getMilliseconds();
// const onlySecond = date.getSeconds();
// const onlyTime = date.getTime();
// const onlyMonth = date.getMonth();
// const onlyMin = date.getMinutes();
// console.log("Day :",onlyDay ,"\nDate :", onlyDate , "\nCurrent year :", onlyYear ,"\nHours :", onlyHours,"\nMilliSec :" , onlyMs ,"\nSecond :", onlySecond  ,"\ntime :", onlyTime , "\nMonth :",onlyMonth,"\nMinute:" , onlyMin)


// 5
// we can also add our custom values 
// var newDate = new Date("June 11 ,2024");
// console.log(newDate)

// 6
// or we can also set the date , day etc
// . we dont use the varibale in d.setFullYear , because , it return a timestamp
 var d = new Date();
 d.setFullYear("2001");
console.log(d.getFullYear())
// -------------practising date ends----------------
                            //   Chp 35
                           // functions
// a block of code used to execute multiple times

// 1
// a simple function used to greet someone 
// function greet(){
//     const name = prompt("Enter Your Name :");
//     console.log("Hi Wellcome" , name);
// }
// greet()

// 2.
// few more functions just like greet , telling the current time , of 24 hours format 
// function tellTime(){
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("Current time: " + theHr + ":" + theMin);
// }
// tellTime();


// 3
// function of single parameters

// function sayHello(name) {
//     console.log("MY name is :" , name);
// }

// sayHello("Sami");  // calling the function

// function of double parameter

// function sayHello(name , friendName) {
//     console.log("MY name is :" , name , "\nand my Friend Name is :" , friendName);
// }

// sayHello("Sami" , "Ali");  // calling the function


// function of two parameters and apply arithematic operations  in it 



// ---------------------------------code----------------------

//1 multiplication
// function multi(a,b) {
//      console.log("the division of " , a , "and" , b , "is" , a*b)

// }

// multi(2,4);  // calling the function

// //2 addition 
// function add(c,d) {
//     // console.log("First Number :" , c , "\nSecond Number is :" , d);
//     console.log("the Addition of " , c , "and" , d , "is" , c+d)

// }

// add(4,2);  // calling the function

// //3 subtraction 
// function sub(e,f) {
//     // console.log("First Number :" , a , "\nSecond Number is :" , b);
//     console.log("the subtraction of " , e , "and" , f , "is" , e-f)

// }

// sub(4,2);  // calling the function

// //4 division 
// function division(g,h){
//     console.log("the division of " , g , "and" , h , "is" , g/h)
// }
// division(8,2)


// // 5 remainder
// function remainder(i,j){
//     console.log("the remainder of " , i , "and" , j , "is" , i%j)
// }
// remainder(8,2)

// ---------------------------------code----------------------

// make a function of calculator having parameter only 2

// function Calculator() {

// let userInput = Number(prompt("Enter First Number :"));
// let userInput1 = Number(prompt("Enter Second Number :"));

// let choice = prompt("Enter Your Choice :\n + - / * % Exit");

// if(choice === "+"){
// console.log("The Addition of", userInput, "and", userInput1, "is:", userInput + userInput1); 
// }
// else if(choice === "-"){
// console.log("The Subtraction of", userInput, "and", userInput1, "is:", userInput - userInput1); 
// }
// else if(choice === "/"){
// console.log("The Division of", userInput, "and", userInput1, "is:", userInput / userInput1); 
// }
// else if(choice === "*"){
// console.log("The Multiplication of", userInput, "and", userInput1, "is:", userInput * userInput1); 
// }
// else if(choice === "%"){
// console.log("The Remainder of", userInput, "and", userInput1, "is:", userInput % userInput1); 
// }
// else{
// console.log("Invalid Choice");
// }

// }

// Calculator();




// -------------questions---------------
                     // Questions about date 
// 1. why we convert the date into string 
// Ans :
// A Date object in JavaScript is a complex object,
//  When you print it directly:
// It shows full date + time + timezone.
// But sometimes we only want:
// Just the date
// Just the year
// A formatted version
// To display it on a website

// 2. instead of using splice why we use slice 
// Ans :
// slice()
// Does NOT change original array
// Returns a new array
// Safe method
// -------------must ask these questions ends---------------