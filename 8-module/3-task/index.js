export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  //Добавление товара в массив
  addProduct(product) {
  }

  //Изменение количества товара
  updateProductCount(productId, amount) {
  }

  //Пустой ли массив
  isEmpty() {
  }

  //Общее количество товаров в массиве
  getTotalCount() {
  }

  //Общая сумма товаров в массиве
  getTotalPrice() {
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

