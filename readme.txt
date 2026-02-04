                                Learning Javascript 
                                                                  
                                  chp 1 : Alert 

. this is the simple function which just pop up on the screen from top , in the form of alert box

                                Chp 2 : Variable 
        
. A variable is a container that stores data (a value) so that we can use or change that value later
. we can concatenate the varible and our written string in console
. Also there are 4 ways in which we can declare our variables

1. first_full_name (snake_case)  
2. FirstFullName  (PascalCase)
3. firstFullName (camelCase) // most common and even javacript built-in function having this format //
4. FIRST_FULL_NAME  (SCREAMING_SNAKE_CASE)

. we can create a variable using the data type which we want to store in it
. there are 5 types of datatype in js 
String , number , boolean , null , undefined

                               Chp 3 Variables for Number

 there are the same way of declaring variables for number as we did in the last chapter

                           chp 4 rules for naming the varibles

 there are certain rules for making the js varibale such as

 var 12alpha: Not allowed
 var al12pha: allowed
 var my name: Not allowed
 var my_name: allowed
 var my*/name: Not allowed
 var my%name: Not allowed
 var my$name: allowed
 var var = "": Reserved keywords not allowed
  

                     Chp 5 Math expressions
 as we know we have to use the BODMAS rule for solving the math expressions
we have this expression :
  
  12 + (62 / (3 + 1)) * 8 - (3 - 1) - 5

and we can solve it as :
 
 (3 + 1) = 4
 (3 - 1) = 2
 62 / 4 = 15.5
 15.5 * 8 = 124
 12 + 124 = 136
 136 - 2 - 5 = 129

         chp 6 math unfamiliar expression
// there are two types of increment and decrement operators

              Increment

1. post increment
   a++ (it first show the value then make increment)
2. pre increment
   ++a (it first increment the value then show it)
  
             Decrement

1. post decrement 
a-- (it first show the value then make decrement)
2. pre decrement
--a (it first decrement the value then show it)



                 Chp 9 Prompts 
 we can take the input from the user using the prompt  function


                 chp 10 if-else (conditional statement)
In this we just apply if else statement in a given condition and it is also called conditional statement 

                   Chp 12 nested if statement 
           
            chp 13 testing set of conditions using logical operators (&& , ||)
here && means if both condition is true then apply the logic
here || means if any one condition is true then apply the logic

                          chp 14 else if if else statement
 we have already done this in previous chapter


                      Chp 15 array 
. we can use array to store our data , in js array have ability to store multiple datatypes values in it
. we can access the elements of an array using the index no 


                    Chp 16 Array methods

. as array is a LIFO(Stack) based , so every new element which is added , goes at the last 
. using push() we can add the new element , pop() for deleting the element


                  Chp 17 array additional methods

. array_name.shift(element_name) , it removes first element from an array 
. array_name.unshift(element_name), if we want to add name again in that array
. array_splice , from this method we will add or remove the element from that array , this method is mutable
. array_slice , 
. there is concept of copy in array , 

1. Shallow Copy :
. using a new varibale we just take the reference of the original array and then print it using console
. there is a drawback , and that is if we make changes in the copy , so the changes also reflect in the original array
. thats why it is called Shallow , i.e it copy the whole array from the top

2. Deep Copy :
. in this copy we perform these steps:
 array > string > copy of string > array
. if we make the changes on the new variable , it doesn't make the changes in the  origonal 
. in shallow copy , it copy the whole array from the top
. in this copy :
. in this copy there is benefit and that is it copy the orignal array and if we push on the copy it does
  not make any change to the original one
. JSON.stringify and JSON.parse both methods are memory intensive
                    