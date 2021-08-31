/*
      JS Exercises

      EX16) Write a function to remove the "Search" magnifying glass icon
      EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
      EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
      EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
      EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
  */
// EX11) Write a function to add a new link into the navbar

const addnewlinkToNav = function () {
    let navbar = document.querySelector('nav')
    let atag = document.createElement("a")

    atag.innerText = "new a tag added"
    atag.classList.add('p-2', 'text-muted')
    navbar.appendChild(atag)
}

// EX12) Write a function to change the color of the main title
const changeColorOfMainTitle = function () {
    let h1 = document.querySelector('h1')
    h1.style.color = "pink"
}

// EX13) Write a function to change the background of the jumbotron
const jumbotronBackground = function () {
    let jumboNode = document.querySelector('div.jumbotron')
    jumboNode.classList.add('jumbo')

}

// EX14) Write a function to remove all the links under "Elsewhere"

const removelinksElsewhere = function () {
    let etags = document.querySelectorAll('aside > div:nth-of-type(3) > ol > li a')
    for (let i of etags) {
        i.remove()
    }
}

// EX15) Write a function to change the column size for heading in jumbotron

window.onload = function () {
    addnewlinkToNav()
    changeColorOfMainTitle()
    jumbotronBackground()
    removelinksElsewhere()
}