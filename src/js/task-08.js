const loginForm = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input")
const userObj = {}
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    for(const input of inputs) {
        if(input.value === ""){
            alert("Not every field is complete")
            break
        }
        userObj[input.name] = input.value
    
    }
    console.log(userObj)
    loginForm.reset()
})

