class DrinkItem extends HTMLElement {
  set Drink(Drink) {
    this._Drink = Drink;
    this.render();
  }
 
  render() {
    this.innerHTML = `
      <style>
        .category {
          margin-bottom: 20px;
        }
      </style>

      <div class="container-sm d-flex justify-content-center">
          <div class="card" style="width: 70rem;">
              <img src="${this._Drink.strDrinkThumb}" class="card-img-top" style="width: 100%; max-height:530px;" alt="Thumbnail">
              <div class="card-body">
              <h3 class="card-title">${this._Drink.strDrink}</h3>
                <p class="card-text">${this._Drink.strInstructions}</p>
                <div class=category>
                  <h5><span class="badge bg-info rounded-pill card-text">${this._Drink.strCategory}</span></h5>
                </div>
                <h5 class="card-title"> Ingredient :</h5>
              </div>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${this._Drink.strIngredient1}</div>
                    ${this._Drink.strMeasure1}
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${this._Drink.strIngredient2}</div>
                    ${this._Drink.strMeasure2}
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${this._Drink.strIngredient3}</div>
                    ${this._Drink.strMeasure3}
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${this._Drink.strIngredient4}</div>
                    ${this._Drink.strMeasure4}
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${this._Drink.strIngredient5}</div>
                    ${this._Drink.strMeasure5}
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${this._Drink.strIngredient6}</div>
                    ${this._Drink.strMeasure6}
                  </div>
                </li>
              </ol>
          </div>
      </div>
    `;
  }
}
 
customElements.define("drink-item", DrinkItem);