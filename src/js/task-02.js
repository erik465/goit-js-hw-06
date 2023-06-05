const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsListEl =  document.createElement("ul")
ingridientsListEl.classList.add("ingredients")

for(const ing of ingredients){
  const el = document.createElement("li")
  el.textContent = ing
  ingridientsListEl.append(el)
}

document.querySelector("body").append(ingridientsListEl)
