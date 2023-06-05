const input = document.querySelector("#font-size-control")

const textOutput = document.querySelector("#text")

input.addEventListener("input", () =>{
    textOutput.style.fontSize = input.value + "px"
})