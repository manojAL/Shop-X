const products=[{product_img:"images/products/athletic-cotton-socks-6-pairs.jpg",
    product_name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
    product_rating:{star:4.5,count:87},
    product_price_paisa:1090},
{product_img:"images/products/intermediate-composite-basketball.jpg",
    product_name:"Intermediate Size Basketball",
    product_rating:{star:4,count:127},
    product_price_paisa:2095},
{product_img:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    product_name:"Adults Plain Cotton T-Shirt - 2 Pack",
    product_rating:{star:4.5,count:56},
    product_price_paisa:799}]
let productsHTML='';
products.forEach((product)=>{
  productsHTML+=html;
const html=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="images/products/${products.product_name}.jpg">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.product_name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/${(products.product_rating.star)*10}.png">
            <div class="product-rating-count link-primary">
             ${products.product_rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(products.product_price_paisa/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`
})    
document.querySelector("js-products-grid").
innerHTML=productsHTML