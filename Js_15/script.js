/* let els = document.querySelectorAll('.el_container div');
for(let item of els){
 item.addEventListener('mouseover', showText);
 item.addEventListener('mouseout', showText);
}
 function showText(event){
     console.log(event)
     document.getElementById('name').innerText = event.type;
     document.getElementById('targetEl').innerText = event.target.id;

     if(event.relatedTarget.classList.contains('el_container')){
        document.getElementById('relatedTargetEl').innerText = event.relatedTarget.className;
     }
     else{
        document.getElementById('relatedTargetEl').innerText = event.relatedTarget.id;
     }
 } */

 /* document.body.addEventListener('keyup',moveBlock);
 let block = document.querySelector('.move');
 let coordX = 0;
 let coordY = 0;
 function moveBlock(event){
    console.log(event)
    switch(event.code){
        case 'ArrowRight':
            coordX +=20;
            break;
    }
    block.style.left = `${coordX}px`
 } */

 /* 1 */
 /* let els = document.querySelectorAll('div');
 for(let item of els){
    item.addEventListener('mouseover',(event)=>Red(event)); 
    item.addEventListener('mouseout', (event)=>Transition(event));
   }
function Red(event){
    event.target.classList.remove('pink');
    event.target.classList.add('red');
}
function Transition(event){
    event.target.classList.remove('red');
    event.target.classList.add('pink');
} */
/* 2 */
let els = document.querySelectorAll('div');
for(let item of els){
    item.addEventListener('mouseover',(event)=>Opean(event)); 
    item.addEventListener('mouseout', (event)=>Close(event));
   }
function Opean(event) {
   let a =  Math.floor(Math.random() * 9);
    event.target.innerText = a;
    event.target.classList.add('white');
}
function Close(event) {
    event.target.classList.remove('white');
    
}