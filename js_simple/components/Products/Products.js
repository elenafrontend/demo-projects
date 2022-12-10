class Products {

  render () {
    let htmlCatalogList = '';
    CATALOG.forEach(({ name, img, price }) => {
      htmlCatalogList += `
        <li class="products-item">
          <h2 class="products-item__title">${name}</h2>
          <div class="products-item__img">
            <img class="img" src="${img}" alt="${name} photo">
          </div>
          <span class="products-item__price">${price}</span>
        </li>
      `
    });

    const htmlCatalog = `
      <ul class="products__list list-reset">
        ${htmlCatalogList}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = htmlCatalog;
  }
}

const productsPage = new Products();
productsPage.render()