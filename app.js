//accessing DOM
const button = document.getElementById('new-quote')
const quote = document.getElementById('text')
const author = document.getElementById('author')
const tweetBtn = document.getElementById('tweet')
//Function to fetch quote api and assign object values to specific dom elements
function newQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quote.textContent = data.content
      author.textContent = data.author
    })
}
//trigger function on button click
button.addEventListener('click', newQuote)
//trigger quote on initial render
newQuote()

function tweetQuote() {
  tweet = `https://twitter.com/intent/tweet?text="${quote.textContent}"-${author.textContent}`
  window.open(tweet, '_blank')
  console.log('tweet tweeet')
}

tweetBtn.addEventListener('click', tweetQuote)
