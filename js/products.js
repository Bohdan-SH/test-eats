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
      console.log(companies[0].image);
      this.element.innerHTML = `${companies.map(item => `
      <article class="products__card" id="${item.id}">
        <img class="products__img" src="${item.image}" alt="">
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