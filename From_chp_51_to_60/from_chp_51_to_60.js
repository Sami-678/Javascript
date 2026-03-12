 
                    //    Chp 51 
        // reading and setting the paragraph text 

     //  1 to change the text of the boxes 
// . first we have to create a function 
// . then we have to target the text 

// 1
                //    method 1 
// . if we want to read the inner text , then type this 
// --------------------code------------------
// document.getElementById("box-1").innerHTML
// --------------------code------------------
 
              //method 2 
// we can also read the text using other methods 
// 1 ) if we type 
// document.body.childNodes
// this will show the childnodes of the html body 
// 2) further if we type 
// document.body.childNodes[1]
// this will print the container element of the body 
// it contains text nodes as well 

// 3) further if we want to see the box 1 
// document.body.childNodes[1].childNodes[1]
// it will show the first box also having the id box-1
// it contains text nodes as well

// 4) for text 
// document.body.childNodes[1].childNodes[1].innerText
// this will show you the inner text of that child node


                    //  CHP 52
            // Manupilating the images and text 
// 1
// here we can easily manupilate the text 
// let targetText2 = document.querySelector(".none2");
// let btnText = document.querySelector(".btnChangetext");

// btnText.addEventListener("click", () => {
//    document.querySelector(".none2").style.display = "block"
//     });

// 2
// here we can easily manupilate the image using queryselector
// ------------------code---------------- 
// let targetImg2 = document.querySelector(".none");
// let btn = document.querySelector(".carBtn");

// btn.addEventListener("click", () => {
    //    document.querySelector(".none").style.display = "block"
    //    document.querySelector(".img-1").style.display = "none"
    //     });
    // ------------------code---------------- 



                    //   Chp 53 
                // Swapping images

// same as the above 


                // Chp 54 


            // chp 55 
           // use  first container
        // contains 1 container and 4 boxes 
//  1) 
// to make the border on the container
// document.querySelector(".Container").style.border = "1px solid black"

// // 2)
// // if we want to change the color of element 
// // 1st box 
// document.querySelector(".Container").childNodes[1].style.backgroundColor = "skyblue"

// // 2nd box (in number 3 )
// document.querySelector(".Container").childNodes[3].style.backgroundColor = "rgb(170, 253, 181)"

// // 3rd box (in number 4 )
// document.querySelector(".Container").childNodes[5].style.backgroundColor = "rgb(170, 253, 238)"

// // 4th box (in number 5)
// document.querySelector(".Container").childNodes[7].style.backgroundColor = " rgb(249, 253, 170)"

// // 3)
// // if we want to make the text in center from x axis , then 
// document.querySelector(".Container").style.textAlign= "center"

// // 4)
// // if we want to gave padding to all boxes then 
// document.querySelector(".box").style.padding = "5px"


            //  chp 56 
        // target all elements by tag name 
// we can also target the elements by targeting there tag name 

// here we have 3 div containing the text (this box contains the tag name elements first , second ,  third  box )

// 1 )
//. at first we will have to target all the div in the container 
document.getElementsByTagName("div")

// 2
//. then we have to store it in a variable and print that variable 
let onlyDiv = document.getElementsByTagName("div")
console.log(onlyDiv)

// 3) 
//. if we want to perform the same styling on all the div , then 
//. we have to first access all as an array and then store it in .length and then apply loop in it 

// . we can also perform the same task manually 
onlyDiv[0].style.fontStyle= 'italic'

// . but we have to perform all the same using loop 
// so after typing this on console all the div got the font style italic
for(let i= 0 ; i < onlyDiv.length ; i++){
    onlyDiv[i].style.fontStyle = 'italic'
}

// 4) 
// we can also perform the box shadow 
for(let i= 0 ; i < onlyDiv.length ; i++){
       onlyDiv[i].style = "box-shadow : 0px 0px 15px 5px rgb(170, 253, 238)"
}

                    //   Chp 57 
                // targeting some elements by tag name 
            
// we can also tag elements using the above mentioned aprroach


                //    Chp 58
            //   The DOM (Document Object Model)
/*
                 as we all know
. we use JS to manupilate the HTML using JS 
. Behind the Scene every HTML elements are object 
. the heirarchy followed by the DOM are as follows:

                 DOCUMENT
                    |
                   HTML
          __________|__________
          |                    |
        HEAD                 BODY
         |                 /   |   \ 
       TITLE              P    P  div 
         |                 \   |   /
   Simple Document          Not More

*/  
 
                     //    CHP 60 
                     // DOM Parent Child 
 /*       
                        DOCUMENT
                            |
                      HTML(DOC child)
          __________________|__________________
          |                                   | 
        HEAD(1st child of DOC)              BODY 
                                      (2nd child of DOC)
         |                             /       |       \ 
       TITLE(1st of head)           P (1st)   P(2nd)  div(3rd) 
         |                             \       |       /
   Simple Document                          Not More 
     (Child of title)
 
*/