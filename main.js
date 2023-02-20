const newBackground = () =>{
    let colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ]
      let newcolor = Math.floor(Math.random() * colors.length)
      console.log(colors[newcolor])
      let backColor = colors[newcolor]
      const background = document.querySelector("body").style.background = backColor
      const container = document.querySelector(".container").style.color = backColor
      const button = document.querySelector("button").style.background = backColor
    }
const getQuotes = () => {
fetch("https://type.fit/api/quotes")
.then(response => response.json())
.then(data => {
    let theQuote = getRandomQuote()
    newBackground()
    console.log(data[theQuote])
document.getElementById("quotes").innerHTML = `<i class="ri-double-quotes-l ri-2x"></i> ${data[theQuote].text}`
document.getElementById("authors").innerHTML = `- ${data[theQuote].author}`
})
}
getQuotes()
const getRandomQuote = () =>{
    const quote = 1643
    return Math.floor(Math.random() * quote)
}
console.log(getRandomQuote())
const getQuoteBtn = document.getElementById("quoteBtn")
getQuoteBtn.onclick = () =>{
    getQuotes()
}
