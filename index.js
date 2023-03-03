let logo = document.querySelector(".logo")
let menuright = document.querySelector("menuRight")
logo.onclick = () => {
    logo.style.display = "none"
}
console.log(logo);
let sabzi = document.querySelector(".sabzi")
sabzi.onclick = () => {
    sabzi.style.display = "none"
    menuright.style.display = "block"
}

