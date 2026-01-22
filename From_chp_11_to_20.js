
//    Chp 11 Comparision operators
// > < <= >= == === != !==

// 1)
// var a = 10;
// var b = 20;
// console.log("b is greater than a :" + (b>a));



                        //   Chp 12 nested if statement 

// 2)
// using nested if else for user authentication

// var user1 = "Admin";
// var password = "Admin@123";
// var userInput = prompt("Enter Username :");
// if (userInput === user1) {
//     alert("Wellcome Admin Enter your password:");
//     var userPassword = prompt("Enter you password:");
//     if (userPassword == password) {
//         alert("Login Successfull!");
//     }
//     else {
//         alert("Incorrect Password!");
//     }
// }
// else {
//     alert("Access Denied!:");
// }


                 // chp 13 testing set of conditions using logical operators


// 3)
// we can also do this using logical operators (&& and ||)
// here we use && operator

// var user = "Ali";
// var password = "Ali@432";
// var userInput = prompt("Enter username :");
// var userPassword = prompt("Enter your password:");
// if (userInput == user && userPassword == password){
//     alert("Access Granted")
// }
// else{
//     alert("Access Denied!");
// }

// 4) 
// here we will use || operator

// var user1 = "Ali";
// var user2 = "Sami";
// var password1 = "Ali@432";
// var password2 = "Sami@432";
// var userInput = prompt("Enter username :");
// var userPassword = prompt("Enter your password:");
// if (userInput == user1 || userInput == user2){
//     alert("Access Granted")
//    if(userPasswor == password1 || userPassword == password2){
//      alert("Login Successfully!");
//    }
// }
// else{
//     alert("Access Denied!");
// }


                    //   chp 14 else if if else statement
// we have already done this in previous chapter


                     // Chp 15 Arrays 
// we will make an array using const

// -----------------------------code----------------------------

// const students = ["Ali" , "Sami" , "Hassan" , "Huzaifa"];
// console.log(students);
// console.log("First Student is :" + students[0])
// console.log("Last Student is :" + students[3])

// -----------------------------code----------------------------

                       // Chp 16 Adding and remooving of elements in array
// -----------------------------code----------------------------

// students.push("Umer");
// console.log(students)
// students.pop()
// console.log(students)

// -----------------------------code----------------------------

                        //    Chp 17 methods in array

// const fruits = ["Apple", "Banana", "Orange" , "Mango" , "Grapes"];
// console.log(fruits);

// fruits.shift(); // it removes first element from an array 
// console.log(fruits)

// fruits.unshift("Apple"); // if we want to add ali again in that array 
// console.log(fruits)

                         //Splice
// it is a method from which we can add or remove the particular element from an array 
// but all this work is done in that array , as splice method is mutable method

//fruits.splice(2, 1) //there are two parameters first is index and second is how many elements you want to remove from that index no
//console.log(fruits) // so it will remove only orange from the array

// if we store this in a variable and then console it
//var removed_fruits = fruits.splice(2, 1)
//console.log(removed_fruits) // so it removes mango

//fruits.splice(2, 0, "Kiwi") //there are two parameters first is index and second is how many elements you want to remove from that index no , as we put 0 it will not remove any element and third parameter is which element you want to add on that index no 
//console.log(fruits) // it will remove add kiwi from index no 2 

//fruits.splice(2, 1 , "Pomegranate", "Watermelon");// it will remove 1 element from index no 2 and add two elements in the place of that elment
//console.log(fruits) // so it removes kiwi and add pomegranate and watermelon on index no 2


                            //   Slice 
// it is a method from which we can add or remove the particular element from an array 
// but all this work is not  that array this method creates a new array , as splice method is mutable method

const student2 = ["Sami" , "Ali" , "Asad" , "Saad" , "Sohail"]
console.log("The orignal array:\n" , student2 )
const slice = student2.slice(1, 4)
console.log("New array\n ", slice) //so it will create a new array of having name ali , asad and saad

          
                