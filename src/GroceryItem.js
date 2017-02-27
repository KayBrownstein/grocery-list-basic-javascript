// your GroceryItem code, here
class GroceryItem {
  constructor(name, quantity) {
    this.name = name;
    if (quantity === undefined) {
      this.quantity = 1;
    }
    else {
      this.quantity = quantity;
    }
  }

  toListElement() {
    // console.log(groceryList);
    // for (let a = 1; a <= groceryList.length; a++) {
    let output = `<li>(${this.quantity}) ${this.name}</li>`;
    return output;
  }
}
