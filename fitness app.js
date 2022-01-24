const form = document.querySelector("form")
const uli =document.querySelector("#uli");
const first = document.querySelector("#inputMeal3")
const second = document.querySelector("#inputCalories")
let total =0;
form.addEventListener("submit", function(e){
   e.preventDefault();
 if(first.value&&second.value){
    const sum =total+=parseInt(second.value);

  if(sum<=1000){
    
   const li= document.createElement("li")
   
  li.innerText =`You had ${first.value} with ${second.value} calories. Your Total calorie intake so far is  ${sum}.`
   
   uli.append(li);
   }
   else{
       alert("YOU ARE ABOUT TO EXCEED DAILY CALORIE LIMIT")
   } 
   first.value="";
   second.value="";
 }
})

uli.addEventListener("click",function(ex){
    ex.target.nodeName==="LI" && ex.target.remove();
   
})




