class Products {

  render () {
    let htmlCatalogList = '';
    CATALOG.forEach(({ id, name, img, price }) => {
      htmlCatalogList += `
        <li>
          <h2>${name}</h2>
          <img src="${img}" alt="${name} photo">
          <span>${price}</span>
        </li>
      `
    });

    const htmlCatalog = `
      <ul>
        ${htmlCatalogList}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = htmlCatalog;
  }
}

const productsPage = new Products();
productsPage.render()