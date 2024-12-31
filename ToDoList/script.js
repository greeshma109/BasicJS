const taskInput=document.querySelector("#taskInput");
const taskList=document.querySelector("#taskList");

function abc(){
   const text=taskInput.value.trim();
   if(text!=="")
   {
    const vare=document.createElement("li");
    vare.innerHTML=`
    <span>${text}</span>
    <button onclick="remove(this)">Delete</button>`;
    taskList.appendChild(vare);
    taskInput.value="";
   }
}
function remove(button)
{
 const listItem=button.parentElement;
 taskList.removeChild(listItem);
}