class Products {

  createProductFor({ id, name, img, price }) {
    const product = document.createElement('li');
    product.className = 'products-item';
    const wrapper = document.createElement('div');
    wrapper.className = 'products-item__wrapper';
    wrapper.innerHTML = `
      <h2 class="products-item__title">${name}</h2>
      <div class="products-item__img img-responsive">
        <img class="img" src="${img}" alt="${name} photo">
      </div>
    `
    // --------- Block with btn and price ---------
    const btnBlock = document.createElement('div');
    btnBlock.className = 'products-item__btn-block'
    const priceEl = document.createElement('span');
    priceEl.className = 'products-item__price';
    priceEl.innerHTML = `${price.toLocaleString('ru-Ru')} &#8381;`
    const btn = document.createElement('button');
    btn.className = 'products-item__btn button button_primary';
    btn.textContent = 'В корзину';

    btn.addEventListener('click', () => {
      this.btnToggle(btn, id)
    })

    btnBlock.append(priceEl);
    btnBlock.append(btn);

    wrapper.append(btnBlock);
    product.append(wrapper);
    return product;
  }

  btnToggle (thisBtn, productId) {
    thisBtn.classList.toggle('button_primary');
    thisBtn.classList.toggle('button_secondary');
  }

  render () {
    const htmlCatalogList = document.createElement('ul');
    htmlCatalogList.className = 'products__list list-reset';

    CATALOG.forEach((catalogItem) => {
      htmlCatalogList.append(this.createProductFor(catalogItem));
    });

    ROOT_PRODUCTS.append(htmlCatalogList);
  }
}

const productsPage = new Products();
productsPage.render();