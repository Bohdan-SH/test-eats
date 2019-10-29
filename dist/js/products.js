import api from './api.js';

export default class Products {
  constructor({ element }) {
    this.element = element;
    this.render();
  }

  // https://assets.misteram.com.ua/misteram-public/${item.image}-400x0.png
  async render() {
    let imgs = [
      '../img/druzi.png',
      '../img/example.png',
      '../img/mac.png',
      '../img/druzi.png',
      '../img/example.png',
      '../img/mac.png',
      '../img/druzi.png',
      '../img/example.png',
      '../img/mac.png',
      '../img/druzi.png'
    ]
    const companies = await api.getCompanies();
    const dishes = await api.getDishes();
    let ids = dishes.map(item => item.id);
    let companiesId = dishes.map(item => item.company_id)
    console.log(companiesId);
    this.element.innerHTML = `${companies.map(item => `
    <article class="products__card" id="${item.id}" data-element="product-card">
      <a href="menu.html">
        <div class="products__img-block">
          <link rel="preload" as="image" href="../img/star.svg">
          <img class="products__img b-lazy" alt="${item.name}" image-helper="${item.image}" data-base-url="https://misteram.com.ua/" data-src="https://dummyimage.com/366x269/dbd7db/dbd7db.png" src="https://assets.misteram.com.ua/misteram-public/${item.image}-400x0.png">
        </div>
      </a> 
      <h3 class="products__name">${item.name}</h3>
      <div class="products__description row container">
        <div class="products__rate-block">
          <img class="products__star" src="./img/star.svg" alt="">
          <span>${item.rating ? `${item.rating}`:"мало оцінок"}</span>
        </div>
        <div>
          <img src="./img/package.svg" alt="">
          <span>замовлення від - ${item.deliveryPrice}грн.</span>
        </div>
      </div>
      <p class="products__time">години доставки ${item.deliveryPriceByActionWorkingTimeStart ? `${item.deliveryPriceByActionWorkingTimeStart} - ${item.deliveryPriceByActionWorkingTimeEnd}`:"цілодобово"}</p>
    </article>
    `).join('')}`;
  }
}
