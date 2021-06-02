function getQuote() {
    fetch('https://type.fit/api/quotes')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        document.querySelector('.quote-container').innerHTML = data[randomNumber].text;
        return data
    });

}

const quoteBtn = document.querySelector('.get-quote-btn');
quoteBtn.addEventListener('click', getQuote);