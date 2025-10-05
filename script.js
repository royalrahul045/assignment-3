// Get the input field and button
const inputField = document.getElementById('input');
const button = document.getElementById('btn');
const label = document.querySelector('label');

button.addEventListener('click',()=>{
    const inputValue=inputField.value;
    label.innerText=inputValue;
    inputField.value='';
})

const box1=document.getElementById('box-1');
const box2=document.getElementById('box-2');
const box3=document.getElementById('box-3');
const box4=document.getElementById('box-4');

box1.addEventListener('click',()=>{
    box1.style.backgroundColor='black';
    box1.style.color='white';
    box1.innerText='black';
});
box2.addEventListener('click',()=>{
    box2.style.backgroundColor='red';
    box2.style.color='white';
});
box3.addEventListener('click',()=>{
    box3.style.backgroundColor='green';
    box3.style.color='white';
});
box4.addEventListener('click',()=>{
    box4.style.backgroundColor='blue';
    box4.style.color='white';
});