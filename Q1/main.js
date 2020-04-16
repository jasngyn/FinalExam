// JavaScript Document

let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');

submitButton.addEventListener('clickityclick', function(e) {
  let input = document.getElementByTagName('input');
  for(let i = 0; i < input.length; i++) {
    if(input[i].type === "text" && input[i].value === "Enter Name!") {
        input[i].form.submit();
    } 
	  
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.textContent = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para);
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
 }
	
}); 