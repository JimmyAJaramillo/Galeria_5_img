import { img } from "./data/data.js";

console.log(img)

const items = document.getElementById("item");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();


const LoadData = (img) => {
    img.forEach(data => {
        const {id,name,img} = data
        templateCard.querySelector("h5").textContent =name;
        templateCard.querySelector("img").setAttribute("src", img)
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

document.addEventListener("DOMContentLoaded", ()=>{
LoadData(img)
})