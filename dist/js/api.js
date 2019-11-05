const api = {
  async getCompanies() {
    const apiCompanyUrl = 'https://misteram.com.ua/api/city/1/companies?offset=0&limit=10&lang=ua';
    
    let res = await fetch(apiCompanyUrl);
    let companies = await res.json();
    return companies;
  },

  async getDishes(id) {
    const apiCompanyUrl = `https://misteram.com.ua/api/company/${id}/dishes?limit=11&offs`;

    let res = await fetch(apiCompanyUrl);
    let dishes = await res.json();
    return dishes;
  }
};

export default api;