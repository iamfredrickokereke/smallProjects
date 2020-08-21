//create variable and assign to dom

const input = document.querySelector('.messageIn');
const sendButton = document.querySelector('.sendBtn');
const output = document.querySelector('.messageOut');


//Target the DOM

sendButton.addEventListener('click', display);

// call display function

function display(e) {
    e.preventDefault();
    let message = input.value;

    if (message === '') {
        alert('Please enter a value')
    }else{        
        output.innerHTML = message;
        input.value = '';
    }    
}