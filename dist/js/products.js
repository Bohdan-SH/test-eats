export default class Products {
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
      <article class="products__card" id="${item.id}">
        <img alt="${item.name}" image-helper="${item.image}" data-image-size="-400x0" data-base-url="https://misteram.com.ua/" src="https://assets.misteram.com.ua/misteram-public/${item.image}-400x0.png">
        <h3 class="products__name">${item.name}</h3>
        <p class="products__description">${item.surchargeInterval}</p>
        <p class="products__time">${item.description}</p>
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