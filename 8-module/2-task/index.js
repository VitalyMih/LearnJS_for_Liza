import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

function productGridTemplate() {
    return `
        <div class="products-grid">
            <div class="products-grid__inner">
            </div>
        </div>
    `
}

export default class ProductGrid {
    constructor(products) {
        this.products = products
        this.filters = {}
        this.elem = createElement(productGridTemplate())

        this._createCards()
    }

    _createCards() {
        const cardsContainer = this.elem.querySelector('.products-grid__inner')
        cardsContainer.innerHTML = ''

         for (let product of this.products) {

             if (this.filters.noNuts && product.nuts) continue
             if (this.filters.vegeterianOnly && !product.vegeterian) continue
             if (product.spiciness > this.filters.maxSpiciness && !!this.filters.maxSpiciness) continue
             if (this.filters.category !== product.category && !!this.filters.category && !!product.category) continue

             const card = new ProductCard(product)
             cardsContainer.append(card.elem)
         }
    }

    updateFilter(filters) {
        Object.assign(this.filters, filters)
        this._createCards()
    }
}


