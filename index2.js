let body = document.querySelector("body")
let flex = document.createElement("div")
flex.classList.add("flex")
body.append(flex)
// let brr = ["img" , "img"]
let arr = ["div", "div", ] /* "div" , "div" */
arr.forEach((elem) => {
    let box = document.createElement(elem)
    let start = document.createElement("h1")
    box.classList.add("box")
    start.innerHTML = "<p> VESTA SW CROSS </p>"
    // ism.innerHTML = "<h1> Hello my world </h1>"
    flex.appendChild(box)
    // let ism = document.createElement("h1")
    let photo = document.createElement("img")
    photo.src = "https://foto.carexpert.ru/img/foto1680/vaz/vazve115.jpg"
    photo.width = "500"
    photo.height = '300'
    photo.alt = 'good'
    start.style.color = "pink"
    start.style.textAlign = "center"
box.append(photo)
box.append(start)
// box.append(ism)
})
body.style.backgroundColor = "brown"


