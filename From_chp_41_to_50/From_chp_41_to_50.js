 
                    //    CHP 41 
                // while loop 
// . normal syntax of while loop , it is also called condition loop 
// 1. print from 1 to 5 
// let i = 0 ;
// while(i<5){
//   console.log(i)
//   i++
// }

// 2. print age untill a valid age  btw 18 to 40 comes out 

// let age = 0;
// while (age < 18 || age > 40) {
//   age = parseInt(prompt("Enter a valid age:"));
// }
// if (age <= 18 || age >= 40) {
//   console.log("Sorry you are not eligible");
// } else {
//   console.log("You are eligible");
// }
// console.log("Your age is:", age);
            
             //    Chp 42
            // do-while loops 
// . this loop , prints it self atleast one time
// .in this loop we first perform the operation , then make condition 
// 1. print from 0 to 9 
// let number = 0 ;
// do{
//     console.log(i)
//     i++
// }
// while(i<10);

// 2. perform addition of numbers untill a target sum is reached 
// let sum = 0;
// let j = 1;
// do {
//     console.log(j)
//   sum += j;
//   j++;
// } while (sum < 20);
// console.log("Sum reached:", sum);


                    //  Chp 43 
            // placing scripts 
// this chapters tell us where we can place our scripts or where we can run our js script files

                    //  Chp 44 
                // Comment 
// commenting of js code , or one line of code 


                //   Chp 45 
            // Event 
// An event in JavaScript is an action or occurrence that happens in the browser (like a click, keypress, or page load) that JavaScript can detect and respond to.

// 1. we can place direct event on html element 
// ---------------code------------
// <a href="#" onClick="alert('Hi');">Click</a>
// ---------------code------------
// if we type this is HTMl file and run this then , if we click on the Click link then it shows alert of Hi 



// 2. or we can also perform this in js file 
//. we have only one button , so we have to use just query Selector 
//. we use GEBCN , when there would be multiple classes of same class name 
//. Using querySelector
//. we just make a button and show the alert
// -----------------code---------------
// let clickLink = document.querySelector(".link");
// clickLink.addEventListener("click", () => {
//       alert("You Clicked me");
//     //   this will print the html element
//       console.log(event.target)
//     });
// -----------------code---------------
// 3
// we can also change the text of the html element 
// after click on the click me button , then the text will be change from click me to You clicked this button 
// ---------------code--------------
// let clickLink1 = document.querySelector(".link");
// clickLink1.addEventListener("click", () => {
//     document.querySelector(".link").innerHTML = "You clicked this link" 
//     console.log(event.target)
//     });
// -----------------code---------------

// 4
// let clickLink2 = document.querySelector(".link-2");
// clickLink2.addEventListener("click", () => {
//        alert("Link  works")
//     console.log(event.target)
//     });



                    //  Chp 46
            //   Event Button 

// 1
// let clickLink3 = document.querySelector(".link-3");
// clickLink3.addEventListener("click", () => {
    
// alert("You click me")
//     });

// 2.
// create a button which performs sum of the numbers according to userinput 
// function sum(a, b) {
//   let calculatingSum = a + b;
//   return calculatingSum;
// }
// let num1 = parseInt(prompt("Enter first number:"));
// console.log(num1)
// let num2 = parseInt(prompt("Enter second number:"));
// console.log(num2)
// let clickLink4 = document.querySelector(".calSum");
// clickLink4.addEventListener("click", () => {
//     console.log("Sum is:", sum(num1, num2));
//     });


                //  chp 47 
            // event mouse 
// there are few mouse event 

// 1
// onclick 
// also called click 
// let clickLink5 = document.querySelector(".eveMouse");
// clickLink5.addEventListener("click", () => {
//     alert("Hello how are you")
//     });

// 2
// when user right click 
// let clickLink6 = document.querySelector(".eveMouse1");
// clickLink6.addEventListener("contextmenu", () => {
//     alert("You are not allowed to inspect")
//     });


// 3
// when user double click on an element 
// let clickLink7 = document.querySelector(".eveMouse2");
// clickLink7.addEventListener("dblclick", () => {
//     alert("Double click on allowed")
//     });

        //   chp 48 
        // event fields

 // this is applicable on input fields

//  1
// if we want to change the color of the input field
// we can also apply for focus and blur 
// --------------------code--------------
let inputName = document.querySelector("#userName");
inputName.addEventListener("click", () => {
    event.target.style.background = 'skyblue'
    console.log(inputValue.value); // gets what user typed
    });
// --------------code---------------

                        // Chp 49 
                    // reading Field value 
                 
// in this we just make a input an a button in html code 
// and then we make variable for both and target both of them usin the querySelector 
// then we add event listner in button 
// and using arrow function we console the input value what user place or type 

// --------------code---------------
// let inputValue = document.querySelector("#userEmail");
// let btn = document.querySelector(".btnSubmit");

// btn.addEventListener("click", () => {
    //     console.log(inputValue.value); // gets what user typed
    // });
// --------------code---------------


            //    chp 50 
    //    setting field value 
let inputValue = document.querySelector("#userPassSet");
let btn = document.querySelector(".btnSet");

btn.addEventListener("click", () => {
    let value = inputValue.value = "Hello World";
    console.log(value); // prints "Hello World" ✅
});