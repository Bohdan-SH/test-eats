class Products {
  constructor({ element }) {
    this.element = element;
    this.renderCompanies();
    this.getDishes();
  }

  async renderCompanies() {
    const apiCompanyUrl = 'https://misteram.com.ua/api/city/1/companies?offset=0&limit=10&lang=ua';
    try {
      let res = await fetch(apiCompanyUrl);
      let companies = await res.json();
      this.element.innerHTML = `${companies.map(item => `
      
        <article class="products__card" id="${item.id}" data-element="product-card">
        <a href="menu.html">
          <div class="products__img-block">
            <img class="products__img" alt="${item.name}" image-helper="${item.image}" data-image-size="-400x0" data-base-url="https://misteram.com.ua/" src="https://assets.misteram.com.ua/misteram-public/${item.image}-400x0.png">
          </div>
        </a> 
          <h3 class="products__name">${item.name}</h3>
          <p class="products__time">${item.deliveryPriceByActionWorkingTimeStart ? `${item.deliveryPriceByActionWorkingTimeStart} - ${item.deliveryPriceByActionWorkingTimeEnd}`:"цілодобово"}</p>
          <p class="products__description">доставка від - ${item.deliveryPrice}грн.</p>
        </article>
    `).join('')}`;
    } catch(err) {
      console.log(err);
    }
  }

  async getDishes() {
    const apiDishUrl = 'https://misteram.com.ua/api/company/732/dishes?limit=11&offs';
    let res = await fetch(apiDishUrl);
    let dishes = await res.json();
    return dishes; 
  }
}

const products = new Products({
  element: document.querySelector('.products')
});