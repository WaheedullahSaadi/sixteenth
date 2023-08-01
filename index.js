

let element=document.getElementById('khan')


function table(){
  element.innerHTML='';

   let start=parseInt(document.getElementById('start').value)
   let end=parseInt(document.getElementById('end').value)
   let table=parseInt(document.getElementById('elect').value)

   
   for(let index=start;index<end;index++ ){

  
       element.innerHTML+=(`  ${table}     x         ${index}     =      ${index*table}<br>`);
   }
  }

  function reset() {
    element.innerHTML=''
    
  }
