const api = {
  async getCompanies() {
    const apiCompanyUrl = 'https://misteram.com.ua/api/city/1/companies?offset=0&limit=10&lang=ua';
    
    let res = await fetch(apiCompanyUrl);
    let companies = await res.json();
    return companies;
  },

  async getDishes(id) {
    const apiCompanyUrl = `https://misteram.com.ua/api/company/${id}/dishes?limit=11&offs`;

    // let onlyNum = /\d+/;
    // var queryString = 'https://misteram.com.ua/api/company/30/dishes?limit=11&offs';
    // console.log((queryString.match(onlyNum)).index); 

    // let urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.get('id'));

    let res = await fetch(apiCompanyUrl);
    let dishes = await res.json();
    return dishes;
  }
};

export default api;