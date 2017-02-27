groceryList = [];
groceryList.push(new GroceryItem('apple', 2));
groceryList.push(new GroceryItem('banana', 3));
groceryList.push(new GroceryItem('orange'));

let element = document.getElementById('main');
let unorderedList = document.createElement('ul');
element.appendChild(unorderedList);

groceryList.forEach((item) => {
  unorderedList.innerHTML += item.toListElement();
});
