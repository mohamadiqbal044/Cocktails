import './drink-item.js';
 
class DrinkList extends HTMLElement {
  set Drinks(Drinks) {
    this._Drinks = Drinks;
    this.render();
  }
 
  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.innerHTML = '';
    this._Drinks.forEach(Drink => {
      const DrinkItemElement = document.createElement('drink-item');
      DrinkItemElement.Drink = Drink;
      
      this.appendChild(DrinkItemElement);
    });
  }
}
 
customElements.define('drink-list', DrinkList);