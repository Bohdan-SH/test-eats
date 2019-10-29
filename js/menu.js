import api from './api.js';

class Menu {
  constructor({ element }) {
    this.element = element;
    this.render();
  }

  async render() {
    let dishes = await api.getDishes();
    
    this.element.innerHTML = `${dishes.map(item => `
      <article class="dishes__card" id="${item.id}">
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
        </article>
    `).join('')}`;
  }
}

const menu = new Menu({
  element: document.querySelector('.dishes')
});