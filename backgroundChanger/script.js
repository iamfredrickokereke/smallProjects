
const button = document.querySelector('.colorBtn');

const body = document.querySelector('body');

const colors = ["red", "yellow", "green", "black"]


// let callChangeBackground = () => {
//     body.style.backgroundColor = 'blue';
//     console.log('change Background');
    
// }
button.addEventListener('click', callChangeBackground);


function callChangeBackground(){

    let random = Math.floor(Math.random() * colors.length);
    
    body.style.backgroundColor = colors[random];
    console.log('changeBackground Fired!');    
}