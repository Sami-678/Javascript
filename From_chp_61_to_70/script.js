
                // chp 61 
            // DOM architecture and nodetype 
/*

document
    └── <html>  (child of document)
            ├── <head>  (1st child of <html>)
            │       └── <title>  (child of <head>)
            │               └── "Simple document"  (child of <title>)
            │
            └── <body>  (2nd child of <html>)
                    └── <div>  (child of <body>)
                            ├── <p>  (1st child of <div>)
                            │     └── "There's not much to this."  (child of 1st <p>)
                            │
                            └── <p>  (2nd child of <div>)
                                  └── "Nor to this."  (child of 2nd <p>)

*/

                            //  Chp 62 
// in this chapter we will target the element using the childnode 

                     // Example 

// if we want to change the background color of the box-1 then we have to type these commands 
// ----------------------code-------------------------------

// document.body.childNodes   //this targets all the childnodes including text , comments 

// document.body.childNodes[5]  // this target the node which is on 5th number and it will be that div containing 4 boxes 

// document.body.childNodes[5].childNodes  // this will show all the nodes of that box 

// document.body.childNodes[5].childNodes[1].style.backgroundColor="red"           // this change the background color of that box-1


// ----------------------code-------------------------------


// we can also save that in a varibale so instead of typing that big command we use that varibale 

// example 

// if we want to change the text and then make it in center from all side 

// -------------code-------------------

// let myElement = document.body.childNodes[5].childNodes[1];
// myElement.innerHTML = "Hello World"; 
// myElement.style.textAlign="center";
// myElement.style.justifyContent="center"
// myElement.style.alignItems="center"
// myElement.style.display="flex"
// myElement.style.borderRadius ="20px"
// myElement.style.margin ="5px"
// myElement.style.backgroundColor ="rgb(102, 100, 103)"
// myElement.style.color ="white"

// -------------code-------------------



                        //    Chp 63 
                // getting the target name 
// when we type 

// ---------------code-------------------
// Element.nodeType  // it returns 1 which means this node is of div type 

// ---------------code-------------------
// 1----------- Element-------- <div>,<p>,<span>
// 2----------- Attribute---------- class="box"
// 3----------- Text---------- the text inside a tag
// 8----------- Comment ------------- <!-- comment -->
// 9 ---------- Document ------------ the root document object
// 11 ----------DocumentFragment -----------a detached fragment


           
                        //  Chp 64 
                // counting elements 
// this contains all attributes elements 



                //  chp 67
        //   adding nodes 
// we can also create a new node

// -------------code-----------------
// document.createElement("p") // this creates a new element of paragraph 
// let newNodes = document.createElement("p") // we can save this in a variable 

// newNodes.innerHTML = "Hello! how are you" // adding some text in it 


// -------------code-----------------



                //    Chp 68 
                // inserting node 
// in this chapter we learn how to add or insert the created node 

// -----------------------code-----------------------

// var boxContainer = document.querySelector(".div")
// boxContainer.append("div.box-5")

// -----------------------code-----------------------


                //       Chp 70 
                // object property 
// 1
// we can create an object using this syntax 

// ----------------code----------------

// let newObj = {
//         name : "Muhammad Ali",
//         age : 23,
//         percentage : 89,
//         school : "ABC high School"
// }
// console.log(newObj)

// ----------------code----------------
// 2
// if we want to change the name from an object then 
// * this will mutate the original object 
// --------------code---------------
// newObj.name= "Asad"

// --------------code---------------

// 3
// we can also add another key value pair in this object as 
// ------------------code----------------
// newObj.favouriteFood = ["Biryani" , "Pulaao" , "kheer"]
// ------------------code----------------