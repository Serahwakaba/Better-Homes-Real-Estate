const readMore =document.querySelector('.readmore');
const text = document.querySelector('.text')

readMore.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if (readMore.innerText === 'read more'){
    readMore.innerText ='read Less';

  }else{
    readMore.innerText ='read more';
  }
})

const readMore2 =document.querySelector('.readmore2');
const text2 = document.querySelector('.text2')

readMore2.addEventListener('click',(e)=>{
  text2.classList.toggle('show-more2');
  if (readMore.innerText === 'read more'){
    readMore.innerText ='read Less';

  }else{
    readMore.innerText ='read more';
  }
})


const readMore3 =document.querySelector('.readmore3');
const text3 = document.querySelector('.text3')

readMore3.addEventListener('click',(e)=>{
  text3.classList.toggle('show-more3');
  if (readMore.innerText === 'read more'){
    readMore.innerText ='read Less';

  }else{
    readMore.innerText ='read more';
  }
})

$(document).ready(function(){
  
  $('#enquire').hide();  
  $('#btn1').on('click', function(){
  $('#enquire').toggle();   
 
  
  });
  
});

$(document).ready(function(){
  
  $('#enquire2').hide();  
  $('#btn2').on('click', function(){
  $('#enquire2').toggle();   
 
  
  });
  
});

$(document).ready(function(){


  $('#enquire3').hide();  
  $('#btn3').on('click', function(){
  $('#enquire3').toggle();   
 
  
  });
  
});






