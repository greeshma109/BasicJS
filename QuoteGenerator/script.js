let quotesList=
[
    {
        quote:"A rose by any other name would smell as sweet.",
        author:"William Shakespeare"
    },
    {
        quote:"Ask not what your country can do for you; ask what you can do for your country.",
        author:"John Kennedy"
    },
    {
        quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
        author:"Thomas Edison"
    },
    {
        quote:"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
        author:"Martin Luther King"
    },
    {
        quote:"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
        author:"Robert Frost"
    }
]
let quoteEle=document.getElementById("quote")
let authorEle=document.getElementById("author")

function getLocalQuotes(){
    let i = Math.floor(Math.random()*quotesList.length)
    quoteEle.innerText = quotesList[i].quote
    authorEle.innerText = "--" + " "+ quotesList[i].author
}
    
document.getElementById("getQuote").onclick = getLocalQuotes
    
async function quoteAPI(){
    let response = await fetch("https://api.quotable.io/random");
    let quote = await response.json()
    quoteEle.innerText = quote.content
    authorEle.innerText = "--" +" " + quote.author
}