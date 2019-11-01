import api from './api.js';
import getQueryVariable from './getQuery.js';

class Menu {
  constructor({ element, id }) {
    this.element = element;
    this.id = id;
    this.render();
  }

  async render() {
    let dish = await api.getDishes(this.id);
    
    let renderDishes = dish.map(item => (
      `<article class="dishes__card" id="${item.id}">
        <div class="dishes__wrapper">
          <div class="dishes__price-block">
            <div class="d-flex">
              <h2 class="dishes__name">${item.name}</h2>
              <span class="dishes__weight">${item.measure}г</span>
            </div>
            <span class="dishes__price">${item.price}грн.</span>
          </div>
          <p class="dishes__description">${item.description}</p>
          <img class="dishes__img img-fluid" alt="${item.name}" image-helper="${item.image}" data-image-size="-400x0" data-base-url="https://misteram.com.ua/" src="https://assets.misteram.com.ua/misteram-public/${item.image}-400x0.png">
        </div>
      </article>`));

    this.element.innerHTML = renderDishes.join('');
  };
};

const menu = new Menu({
  id: getQueryVariable('id'),
  element: document.querySelector('.dishes')
});