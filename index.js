document.getElementById('heading').style.color='red';
document.getElementById('heading').style.background ='#e2e2e2';

document.getElementById('intro').innerHTML = 'I am Maureen Akinyi Ougo and am 24 years old';
document.getElementById('intro').style = '25px'

let paragraph= document.createElement('p');
paragraph.innerHTML =' i am a software Developer'
document.getElementById('container').appendChild(paragraph).style.color = 'blue'
 let child=document.getElementById('container').children
 console.log({child})

//  button
let button = document.getElementById('button')
button.addEventListener('click', function(){
    button.innerHTML='Success'
})
document.getElementById('container').setAttribute('class','containers')



