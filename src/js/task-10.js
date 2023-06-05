function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector("#controls").firstElementChild

const createButton = document.querySelector('button[data-create]')
const destroyButton = document.querySelector('button[data-destroy]')

let boxContainer = document.querySelector("#boxes")

createButton.addEventListener("click", () => {
  boxContainer.innerHTML = ""

  for(let i=1; i<=amountInput.value; i++) {
    const size = i * 30
    boxContainer.insertAdjacentHTML("beforeend", `<div style="margin-bottom:10px; width:${size}px; height:${size}px; background:${getRandomHexColor()}"> </div>`)
  }
})

destroyButton.addEventListener("click", ()=>{
  console.log(boxContainer)
  boxContainer.innerHTML = ""
})