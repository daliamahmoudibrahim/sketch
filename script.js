
let content=document.createElement('div');
content.classList.add('content');

for(let i=0;i<3000;i++){
    
    let box=document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover',()=>{
        
        box.style.backgroundColor=`rgb(85, 148, 156)`;
    })
    
    content.appendChild(box);

//clear
    let btnclear=document.querySelector('#clear');
btnclear.addEventListener('click',()=>{
     box.style.backgroundColor='transparent';
})

    
};
document.body.append(content);

 


