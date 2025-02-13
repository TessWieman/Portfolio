console.log("test")

// hamburger menu
let openButton = document.querySelector("header > button")
let sluitButton = document.querySelector("nav > button")
let deNav =  document.querySelector("nav")

function openMenu () {
  deNav.classList.add("toonMenu")
}

function sluitMenu () {
  deNav.classList.remove("toonMenu")
}

openButton.addEventListener('click', openMenu)
sluitButton.addEventListener('click', sluitMenu)
