
// create variable and target dom elements
const Button = document.querySelector('.colorBtn');

const Body = document.querySelector('body');

// create array of desired colors

const Colors = ['red', 'blue', 'green', 'purple', 'yellow', '#fe33ee', '#232111', '#455aaa'];


// listen for click event and call a function

Button.addEventListener('click', changeMe);

function changeMe(e) {
    e.preventDefault;

    let random = Math.floor(Math.random() * Colors.length);

    console.log(random);
    
    Body.style.backgroundColor = Colors[random];
    console.log('fired');
    
}