const categoriesItems = document.querySelectorAll(".item")

console.log("Number of categories: " + categoriesItems.length)

categoriesItems.forEach(function (category){
    console.log("Category: " + category.firstElementChild.innerHTML + "\n")
    console.log("Elements: " + category.lastElementChild.childElementCount+ "\n")
})