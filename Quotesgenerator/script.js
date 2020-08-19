// create variable and target dom

const quoteBtn = document.querySelector('.quoteBtn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const quotesArray = [
    {
        quote: 'Quote 1',
        author: 'Author 1'
    },
    {
        quote: 'Quote 2',
        author: 'Author 2'
    },
    {
        quote: 'Quote 3',
        author: 'Author 3'
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

