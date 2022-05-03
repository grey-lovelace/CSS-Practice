const cycleTimeInSeconds = 5
const staticText = "Work It, Make It, Do It, Makes Us:"
const typingTextList = [
    "Harder...",
    "Better...",
    "Faster...",
    "Stronger..."
]

const staticTextElement = document.getElementById('static-text')
const typingTextElement = document.getElementById('typing-text')
const typingContainer = document.getElementById('typing-container')

let index = 0
const updateText = () => {
    typingContainer.style.setProperty("--text-length", typingTextList[index].length)
    typingTextElement.innerText = typingTextList[index]
    index = (index + 1) % typingTextList.length
}

staticTextElement.innerText = staticText
typingContainer.style.setProperty("--typing-speed", `${cycleTimeInSeconds}s`)
updateText()

setInterval(() => {
    setTimeout(updateText, 100)
}, cycleTimeInSeconds * 1000 )