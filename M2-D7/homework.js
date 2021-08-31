/*
      JS Exercises
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

const changeColSize = function () {
    let manDiv = document.querySelector('div.jumbotron')
    // let manDiv = document.querySelectorAll('div.jumbotron > div:first-of-type')
    // let manDiv = document.querySelectorAll('div.jumbotron *')
    // let newDiv = document.createElement('div')
    // newDiv.classList.add('col-12')
    // manDiv.classList.add('col-12')
    let h1 = document.querySelector('h1')
    h1.classList.add('col-6')
    // newDiv.appendChild(h1)
    // manDiv[2].appendChild(newDiv)
    // manDiv.appendChild(newDiv)
}

// EX16) Write a function to remove the "Search" magnifying glass icon
const removeSearch = function () {
    let searchNode = document.querySelector('header div > div:nth-of-type(3) a:nth-of-type(1)')
    searchNode.hidden = true
}

// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
const trimCharacters = function () {
    let p = document.querySelectorAll('main div div.blog-post > p:nth-of-type(2)')
    for (let i = 0; i < p.length; i++) {
        let str = p[i].innerText
        let slic = str.slice(50)
        console.log(slic)
        slic
    }
}

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post(just div and title)
const newPost = function () {
    let blogNode = document.querySelector('.blog-main .blog-post')

    let nPost = document.createElement('div')
    nPost.classList.add('col-md-8')
    nPost.innerHTML += `
                        <h1>New Post</h1>
                        <p class="blog-post-meta">
            August 30, 2021 by Zee
          </p>
                    
                            `

    blogNode.prepend(nPost)
}

// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post



window.onload = function () {
    trimCharacters()
    changeColSize()
    addnewlinkToNav()
    changeColorOfMainTitle()
    jumbotronBackground()
    removelinksElsewhere()
    removeSearch()
}