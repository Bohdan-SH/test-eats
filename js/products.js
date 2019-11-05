import api from './api.js';

class Products {
  constructor({ element }) {
    this.element = element;
    this.render();
  }

  async render() {
    let companies = await api.getCompanies();

    let renderCompanies = companies.map(company => (
      `<article class="products__card" data-element="product-card">
        <a href="menu.html?id=${company.id}" id=${company.id} data-element="menu-link">
          <div class="products__img-block">
            <img class="products__img" alt="${company.name}" image-helper="${company.image}" data-base-url="https://misteram.com.ua/" src="https://assets.misteram.com.ua/misteram-public/${company.image}-400x0.png">
          </div>
        </a> 
        <h3 class="products__name">${company.name}</h3>
        <div class="products__description row container">
          <div class="products__rate-block">
            <img class="products__star" src="./img/star.svg" alt="">
            <span>${company.rating ? `${company.rating}`:"мало оцінок"}</span>
          </div>
          <div>
            <img src="./img/package.svg" alt="">
            <span>замовлення від - ${company.deliveryPrice}грн.</span>
          </div>
        </div>
        <p class="products__time">години доставки ${company.deliveryPriceByActionWorkingTimeStart ? `${company.deliveryPriceByActionWorkingTimeStart} - ${company.deliveryPriceByActionWorkingTimeEnd}`:"цілодобово"}</p>
      </article>`));

    this.element.innerHTML = renderCompanies.join('');
    let links = [...document.querySelectorAll('[data-element="menu-link"]')];
    let ids = links.map(link => link.id);
    let dishes = await api.getDishes(ids[4]);
  };
};

export default Products;