let counterValue = 0;

const increaseButton = document.querySelector("button[data-action='increment']")
const decreaseButton = document.querySelector("button[data-action='decrement']")

let valueText = document.querySelector("#value")

increaseButton.addEventListener("click", () =>{
    counterValue += 1;
    valueText.textContent = counterValue
})

decreaseButton.addEventListener("click", () =>{
    counterValue -= 1;
    valueText.textContent = counterValue

})