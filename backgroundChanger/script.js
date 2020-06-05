
const button = document.querySelector('.colorBtn');

const body = document.querySelector('body');

const colors = ["red", "yellow", "green", "black"]


// let callChangeBackground = () => {
//     body.style.backgroundColor = 'blue';
//     console.log('change Background');
    
// }
button.addEventListener('click', callChangeBackground);


function callChangeBackground(){

    body.style.backgroundColor = colors[1];
    console.log('changeBackground Fired!');    
}