const button = document.querySelector('.get-quote-btn');
const quoteContainer = document.querySelector('.quote-container');

const quoteURL = 'https://type.fit/api/quotes';

function getQuote() {
    fetch(quoteURL)
    .then(response => response.json())
    .then(data => {
        let randomNumber = Math.floor(Math.random() * 100);
        const quoteText = data[randomNumber].text;
        quoteContainer.textContent = quoteText
    })
}

button.addEventListener('click', getQuote);