const source = document.querySelector(".tools")
const input = source.children[0];
const add = source.children[1];
const dicard = source.children[2];
const list  = document.querySelector(".list") 

// CREATING TASK MODEL 
let taskShell = document.createElement("div");
function createTask(){

}
add.addEventListener("click",()=>{
    let taskContent = input.value;
    console.log(taskContent)
})