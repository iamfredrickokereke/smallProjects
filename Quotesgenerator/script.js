// create variable and target dom

const quoteBtn = document.querySelector('.quoteBtn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const quotesArray = [
    {
        quote: 'First, solve the problem. Then, write the code.',
        author: 'John Johnson'
    },
    {
        quote: 'Experience is the name everyone gives to their mistakes.',
        author: 'Oscar Wilde'
    },
    {
        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler'
    }
]

// add event listener

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(e) {
    e.preventDefault();

    let random = Math.floor(Math.random()*quotesArray.length);

    console.log(random);
    
    quote.innerHTML = quotesArray[random].quote;
    author.innerHTML = quotesArray[random].author;

    console.log('Fired');
    
}

