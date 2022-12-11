class Products {

  render () {
    let htmlCatalogList = '';
    CATALOG.forEach(({ name, img, price }) => {
      htmlCatalogList += `
        <li class="products-item">
          <div class="products-item__wrapper">
            <h2 class="products-item__title">${name}</h2>
            <div class="products-item__img img-responsive">
              <img class="img" src="${img}" alt="${name} photo">
            </div>
            <div class="products-item__info">
              <span class="products-item__price">${price.toLocaleString('ru-Ru')} &#8381;</span>
              <button class="products-item__btn button button_primary">В корзину</button>
            </div>
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