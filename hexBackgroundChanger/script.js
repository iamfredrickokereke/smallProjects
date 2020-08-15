
// create variable and target dom elements

const body = document.querySelector('body');

const button = document.querySelector('.colorBtn');

const hexValue = document.querySelector('.hex-value');


// generate hex numbers

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// add event listener

button.addEventListener('click', callbackAction);

function callbackAction(e) {
    e.preventDefault();

    let hexColor = '#';

    for (let index = 0; index < 6; index++) {
        
        let random = Math.floor(Math.random()*hexNumbers.length);

        hexColor+=hexNumbers[random];

        console.log(hexColor);        
    }
    console.log('Event Fired!!!');

    body.style.backgroundColor = hexColor;

    hexValue.innerHTML = hexColor;

    
    
}