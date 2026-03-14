// select elements
var Input =document.querySelector('#in');
var AddBtn=document.querySelector('#btn');
var tasklist=document.querySelector('#list');

function addtask(){
    const task=Input.value;
    const li=document.createElement('li');
    li.textContent=task;
    tasklist.appendChild(li)
    li.addEventListener('click',function(){
        li.style.color="gray";
        li.style.textDecoration="line-through";
    })
    li.addEventListener('dblclick',function(){
        tasklist.removeChild(li);
    })
    Input.value="";
}

AddBtn.addEventListener('click',addtask)

