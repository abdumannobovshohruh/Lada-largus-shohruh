let body = document.querySelector("body")
let flex = document.createElement("div")
flex.classList.add("flex")
body.append(flex)
let arr = ["div", "div"]
arr.forEach((elem) => {
    let box = document.createElement(elem)
    box.classList.add("box")
    flex.appendChild(box)
    let photo = document.createElement("img")
photo.src = "https://foto.carexpert.ru/img/foto1680/vaz/vazve115.jpg"
photo.width = "500"
photo.height = '300'
photo.alt = 'good'
box.append(photo)
// box.innerHTML = <h1 >helo</h1>
})
