let Quotes = [
    "Believe in yourself",
    "Hard work beats talent",
    "Never give up.",
    "Success needs patience.",
    "Dream big.",
];



let quoteshow = document.querySelector('.quoteshow');
let nextbtn = document.querySelector('.nextbtn');

nextbtn.addEventListener('click',()=>{
    let RandomText = Math.floor(Math.random()*Quotes.length)
    quoteshow.innerHTML = Quotes[RandomText] 
})
