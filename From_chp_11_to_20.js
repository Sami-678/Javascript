
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

// ----------------------code--------------------------

// const student2 = ["Sami" , "Ali" , "Asad" , "Saad" , "Sohail"]
// console.log("The orignal array:\n" , student2 )
// const slice = student2.slice(1 , 4)
// console.log("New array\n ", slice) //so it will create a new array of having name ali , asad and saad

// ----------------------code--------------------------
//  tospliced
// it is a new splice method in which , the original array is saved but , it make the copy of that array 

// --------------------------code--------------------

// let arr = [1, 2, 3, 4];
// // first is index no  , second is deleted counts
// // so the the no's that are deleted are 2, 3 , so the output is 1, 4

// let newArr = arr.toSpliced(1, 2);
// console.log(newArr); // [1, 4]
// console.log(arr);    // [1, 2, 3, 4]  (original safe)

// let newArr2 = arr.toSpliced(0 , 1);
// console.log(newArr2)

// --------------------------code--------------------

//   Deep copy and Shallow Copy

//1) Shallow Copy : 
//. if we make the changes on the new variable and the changes done of both copy and the origonal 
// . in shallow copy , it copy the whole array from the top

// --------------------------code----------------------------

// let myArray = ["a" , "b" , "c" , "b"]
// const newArray =  myArray;
// newArray.push("e");
// console.log("Orginal Array: " + myArray ,"\nSecond Array: " + newArray)


// --------------------------code----------------------------
// 2) Deep Copy :
//. if we make the changes on the new variable , it doesn't make the changes in the  origonal 
// . in shallow copy , it copy the whole array from the top
// . in this copy :
// array > string > copy of string > array
// . in this copy there is benefit and that is it copy the orignal array and if we push on the copy it does not make any change to the original one
// . JSON.stringify and JSON.parse both methods are memory intensive
// ---------------------code-------------------------
// First method
// const deepCopy = ["a" , "b" , "c" , "d"];
// const deepCopy1 = JSON.stringify(deepCopy); // this converted the array into string
// const deepCopy2 = JSON.parse(deepCopy1) // this parse the string  to array
// deepCopy2.push("e");
// console.log("Original Array " ,  deepCopy , "\nDeep Copy Array" , deepCopy2)

// second method
// this method is better then the first method as it takes less variable 
// const dpCopy = ["a" , "b" , "c" , "d"];
// const dpCopy1 = JSON.parse(JSON.stringify(dpCopy)); // this converted the array into string and then parseit into array
// dpCopy1.push("e");
// console.log("Original Array " ,  dpCopy , "\nDeep Copy Array" , dpCopy1)


// ---------------------code-------------------------

// CHP 18 FOR LOOP
// we use loop to perform  the task in multiple times

//1 suppose if we want to print Hello world 10 times , instead of writing 10 times console.log("Hello world") ,


// for(i=1 ;i<11 ; i++){
//     console.log("Hello world" , i);
// }

// we can also reverse this 

// for(i=11 ;i>0 ; i--){
//     console.log("Hello world" , i);
// }

// 2. print the table of 2
// for(i=1; i<11; i++){
//     console.log("2 x " + i + " = " + 2*i);
// }

// 3. print the table of userinput

// let userinput = Number(prompt("Enter any number:"));
// for(let i = 1; i < 11; i++){
//     console.log(userinput + " x " + i + " = " + userinput*i);
// }

// 1
//  to print the Element of array using loop
// const num = [1 , 2 , 3 , 4 , 5]
// for(let i=0 ; i<=num.length ; i++){
//     console.log(num[i]);
// }

// 2
// now check the condition either the required value is found or not (flag , loopus interptus)
// if we place continue then the inner loop got end 
// if we place break then the whole loop got end
// const num2 = ['a' , 'b' , 'c' , 'd' , 'e']
// const isFound = false ;
// for(let i=0 ; i<=num2.length ; i++){
//     const item = num2[i];
//     console.log(item) ;
//     if(item === 'd'){
//         console.log("Found" , item);
//         break;
//     }
    
// }


                    //   chp 20 
                    //   for nested loop


// it works as  : first itteration
//            BlueRay
//    1  /  2 |    3|    4 \
//  Rizz    Burp   DogBone   Droop
// var firstName = ['BlueRay' , 'Upchuck' , 'Lojack' , 'Gizmo' , 'Do-Rag'];
// var lastName = ['Rizz' , 'Burp' , 'Dogbone' , 'Droop'];
// var fullName = [];
// for(var i=0 ; i<firstName.length ; i++){
//     for(var j=0;j<lastName.length ;j++){
//         fullName.push(firstName[i] ,lastName[j]);
//     }
// }
// console.log(fullName)

