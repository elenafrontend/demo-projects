class Products {

  render () {
    let htmlCatalogList = '';
    CATALOG.forEach(({ name, img, price }) => {
      htmlCatalogList += `
        <li class="products-item">
          <div class="products-item__wrapper">
            <h2 class="products-item__title">${name}</h2>
            <div class="products-item__img">
              <img class="img" src="${img}" alt="${name} photo">
            </div>
            <span class="products-item__price">${price}</span>
            <button class="products-item__btn button">Добавить в корзину</button>
          </div>
        </li>
      `
    });

    ROOT_PRODUCTS.innerHTML = `
      <ul class="products__list list-reset">
        ${htmlCatalogList}
      </ul>
    `;
  }
}

const productsPage = new Products();
productsPage.render()