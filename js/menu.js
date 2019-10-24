class Menu {
  constructor({ element }) {
    this.element = element;
    this.renderDishes();
  }

  async renderDishes() {
    const apiCompanyUrl = 'https://misteram.com.ua/api/company/732/dishes?limit=11&offs';
    try {
      let res = await fetch(apiCompanyUrl);
      let dishes = await res.json();
      this.element.innerHTML = `${dishes.map(item => `
        <article class="dishes__card" id="${item.id}" data-element="product-card">
          <div class="dishes__img-block">
            <img class="dishes__img img-fluid" alt="${item.name}" image-helper="${item.image}" data-image-size="-400x0" data-base-url="https://misteram.com.ua/" src="https://assets.misteram.com.ua/misteram-public/${item.image}-400x0.png">
          </div>
          <h3 class="dishes__name">${item.name}</h3>
          <p class="dishes__cost">${item.price}грн.</p>
          <p class="dishes__descript">${item.description}</p>
        </article>
    `).join('')}`;
    } catch(err) {
      console.log(err);
    }
  }
}

const menu = new Menu({
  element: document.querySelector('.dishes')
});