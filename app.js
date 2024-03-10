// first question--------------------------------
// I am getting button color form colorpicker 

let selectedc;
let color= document.querySelector(".colorpicker");
color.addEventListener('input', function() {
    selectedc = color.value;
});

let btn=document.querySelector(".btnfirst");
btn.addEventListener("click" ,changeColor)

function changeColor(){
     let btn=document.querySelector(".btnfirst");
     if(selectedc == null)
     alert("Please select color first")
    else
     btn.style.backgroundColor=selectedc;
}

// Question 2-----------

let btnp=document.getElementById("btnp");

btnp.addEventListener("click",function(){
    let para=document.getElementById("para");
    para.classList.toggle("parashow");

})


// Question 3-------------------

let ul=document.createElement("ul");

for(i=1; i<10; i++){
let li=document.createElement("li");
li.textContent="Item "+i;
ul.appendChild(li);
}
let divlist=document.getElementById("lists");
divlist.appendChild(ul);


// Question 4-----------------

let form=document.createElement("form");
let divform=document.getElementsByClassName("form")[0];
divform.appendChild(form);
let btnform=document.querySelector(".form button");
btnform.addEventListener("click",function(){
    let input=document.createElement("input");
    var lineBreak = document.createElement("br");
    input.setAttribute("type" , "text");
    form.appendChild(input);
    form.appendChild(lineBreak);
   
})


// Question 5-----------------

function sum(){
   let num1 = document.getElementById("num1") ;
   let num2 = document.getElementById("num2") ;
   let res = document.getElementById("res") ;

   res.value = Number(num1.value) + Number(num2.value) ;

}

function sub(){
   let num1 = document.getElementById("num1") ;
   let num2 = document.getElementById("num2") ;
   let res = document.getElementById("res") ;
   
   res.value = Number(num1.value) - Number(num2.value) ;

}

function mult(){
    let num1 = document.getElementById("num1") ;
    let num2 = document.getElementById("num2") ;
    let res = document.getElementById("res") ;
    res.value = Number(num1.value) * Number(num2.value) ;
 
 }

 function division(){
    let num1 = document.getElementById("num1") ;
    let num2 = document.getElementById("num2") ;
    let res = document.getElementById("res") ;
    
    res.value = Number(num1.value) / Number(num2.value) ;
 
 }