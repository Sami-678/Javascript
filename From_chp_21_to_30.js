
                         //    Chp 21
                         // case change
// uppercase , lowercase 
// 1
// . it doesnot mutate the original string 
// . it create a copy of the string if , we use another variable
// const userEmail = prompt("Enter your Email");
// const lowerCase = userEmail.toLowerCase();
// const upperCase = userEmail.toUpperCase();
// console.log( upperCase ,"\n",lowerCase ,"\n",userEmail) // we can easily check here by also printing the user enter email

// 2

// apply condtioion on the user enter email
const email = "samitariq591@gmail.com";
// const userEnterEmail = prompt("Enter Your Email: ");
// if(userEnterEmail === email) alert("Login Successfully")
// else alert("Invalid Credentials") //as js is a high level language and it space as intendation for single line of code as python

// accessing the email alphabets by index no 
// console.log(email[3])

// . makes a copy of the original email using slice
// const emailCopy = email.slice(0,9)
// console.log(emailCopy)

// . correct the name starts from lower case and end with uppercase
const name = "mouTASSIm"
const firstLetter = name[0];
const lastLetter = name.slice(1) // ending parameter is optional
// const upper = firstLetter.toUpperCase()
// const lower = lastLetter.toLowerCase()
// const final = upper + lower ;
// console.log(final)


                            // Chp 22
                            //Measuring length and  Extracting parts from the string
// // .indexof
// const single = email.indexOf('@');
// console.log(single) // it will show the index no of that symbol

// fetching the name from the email using indexof , slice 

// const email2 = "muhammadsami@gmai.com"
// const firstIndexof = email2.indexOf('@')
// const Name = email2.slice(0,firstIndexof);
// console.log(Name)

// userinput
// const email3 = prompt("Enter Your Email:");
// const firstIndexof = email3.indexOf('@')
// const Name = email3.slice(0,firstIndexof);
// console.log("Your name is :",Name)

                    //    CHP 23 
                    // Finding segements
                        
const text = "the quick brown fox jumps over a lazy queen dog";
// A)
// finding total words in this text
// let totalWords = 0;
// for (let i = 0; i < text.length; i++) {
//     const item = text[i];
//     if (item === " ") // it checks if the current character is a space or not
//     {
//         totalWords++; //increase 1 in total words as there is a space btw 2 words
//     }
// }
// if (totalWords > 0)  //here checks the condition either total words are greater then 0
// {
//     totalWords = totalWords + 1; 
//     //
// }
// console.log(totalWords);


// indexof and last indexof

// console.log(text[2]) // e is at the index of 2

                //    Chp 24 
                // Finding the character at the location of 

// indexof and last indexof always return the number , so if we place ay letter that is not present in that text then it shows -1

// const notMention = text.indexOf("this")
// console.log(notMention )

// for that string which is repeating 
// const firstmention = text.indexOf("q");
// const lastmention = text.lastIndexOf("q");
// console.log(firstmention , lastmention) 

// const userWord = 'queen' ;
// let indexNumber = -1;
// for(let i=0 ; i<text.length ;i++){
//      const item = text.slice(i , i+userWord.length);
//      console.log(item);
//      if(item=== userWord){
//         indexNumber = i;
//         break
//      }
// }
// console.log(indexNumber)

                    // CHP 25 
                // replacing characters

// replace , replace all

// const greet = "Hello My Friend Hello my name is Ali\n"
// const newgreet = greet.replace("Hello", "Assalamualikum");
// const newgreet1 = greet.replaceAll("Hello", "Assalamualikum");
// console.log(newgreet , newgreet1);


                //  CHP 26 
                //  Rounding numbers
//  there are few mehtods of rounding off the decimal numbers in js

// 1) Math.round
//. we use let here as let allows the reassignement of the variable
//. redeclartion is not allowed in let i.e
   //  let x = 2;
   //  let x = 3  // not allowed
// . it round of the value till the real whole no and removes the no's after decimal
// let value = 3.67809
//  pi = Math.round(value)
// console.log(pi , value) // it doesn't mutate the real variable , i.e makes copy and print it 


// 2) Math.ceil

// let perfume = 9000.5558;
// let totalAmount = Math.ceil(perfume); // ceil means top of the room (roof) , it increases the value , from the decimal
// let totalAmount1 = Math.floor(perfume);// floor means top of the   ground level (base) , it decreases the value , from the decimal
// console.log(totalAmount , totalAmount1 , perfume)

// 3)
// how to make the random no btw 1 to 10
// let decNumber = Math.random();
// decNumber = decNumber.toFixed(1)
// console.log(decNumber*10)

// 4)
// also from 1 to 100
// let decNumber1 = Math.random();
// decNumber1 = decNumber1.toFixed(1)
// console.log(decNumber1*100)

                        //   CHP 27 
                // Generating Random Number
// 1) Math.random 
// it is a method which generates the unique no btw 0 to 1

//  var randomNo = Math.random();
// console.log(randomNo)

// 2) 
// make a guess game , having only 5 attempts , limit of the random no after decimal is 1 
// let ranNum = Number(Math.random().toFixed(1)); // random no (0.0 - 1.0)
// let isWin = false;

// for (let attempt = 1; attempt <= 5; attempt++) {
//     let userInput = Number(prompt("Enter number btw 0 to 1 :\nYou have only 5 attempts:"));

//     if (userInput === ranNum) {
//         console.log("Congrats! You won 🎉");
//         isWin = true;
//         break; // stop loop after success
//     } else {
//         console.log("Wrong ❌");
//     }
// }

// if (isWin = false) {
//     console.log("Game Over 😢");
//     console.log("Correct number was:", ranNum);
// }

                          // Chp 28
                    // converting strings to int ,string to dec or float
// 1)
// string number to integer
//  let currentAge = "23";
// console.log(currentAge , typeof(currentAge))
// currentAge = Number(currentAge) // this converts the string number into integer number
// console.log(currentAge , typeof(currentAge))

// 2)
// to convert the decimal string into float 
var myFractional = parseFloat("1.9999");
console.log(myFractional)

                //  CHP 29
            // converting integer to string 
// 1)
// toString();
 // let myInt = 1234;
// myInt = myInt.toString();
// console.log(myInt , typeof(myInt) )

// 2) 
// also we can apply JSON.tostringify();

// let myInt1 = 2345;
// let myInt2 = JSON.stringify(myInt1);
// console.log( myInt1 , myInt2) // as it  makes the copy of the original variable 

                //   CHP 30
            // Controlling the length of the decimal
// let fixedNum = Math.random();
// fixedNum = fixedNum.toFixed(2)
// console.log(fixedNum) // so it makes the limit up to 2



// Game

// making of a head and tails game using the loop ,math.random , if else , alert and prompt
// total score is the score of the user , also its inital value is 0  , and increase by the system when user get score
let totalScore = 0;
// total target
const target = 70;

// loop , in while loop we just gave the condition in the round brackets 
while (totalScore < target) {
//  takes user input 
  const userNumber = Number(prompt("Enter your Number"));
// make varibale for random function 
  const randomNumber = Math.random();
  // as score limit in one time is btw 1 to 6
  // as we know this function no generates the n btw 1 and 0
  const computerNumber = Math.ceil(randomNumber * 6);
  // show alert of computer number
  alert("Computer number is : " + computerNumber);
// make a condition 
// if user input and computer genrated numbers are matched  after save it in a variable 
//then apply condition on the variable if condition is true , i.e user input and computer numbers are matched then wicket is taken and then user is out  
  const isWicket = userNumber === computerNumber;
  if (isWicket) {
    alert("Ohho, Out by Computer (Dumb Machine)");
    break;
  }
  // if no matched 
  // then increase 1 in the total score

  else {
    totalScore += userNumber;
    if (totalScore >= target) {
      alert("Hurrrayy! You won");
    } else {
        alert("Your total is: " + totalScore);
    }
  }
}






