import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { products } from "../../data/products.js";
import { getProduct } from "../../data/products.js";
import formatCurrency from "../utils/money.js";
export function renderPaymentSummary(){
    let productPriceRupees=0;  
    let shippingPriceRupees=0;  
    cart.forEach((cartItem) => {
    const product =getProduct(cartItem.productId);
    productPriceRupees+=product.priceCents*cartItem.quantity
    const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId)
    shippingPriceRupees+=deliveryOption.priceCents;
    });
    const totalBeforeTaxRupees=productPriceRupees+shippingPriceRupees;
    const taxRupees=totalBeforeTaxRupees*0.1;
    const totalRupees=totalBeforeTaxRupees+taxRupees;
    const paymentSummaryHTML=` <div class="payment-summary-title">
              Order Summary
            </div>
  
            <div class="payment-summary-row">
              <div>Items (3):</div>
              <div class="payment-summary-money">₹${formatCurrency(productPriceRupees)}</div>
            </div>
  
            <div class="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div class="payment-summary-money">₹${formatCurrency(shippingPriceRupees)}</div>
            </div>
  
            <div class="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div class="payment-summary-money">₹${formatCurrency(totalBeforeTaxRupees)}</div>
            </div>
  
            <div class="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div class="payment-summary-money">₹${formatCurrency(taxRupees)}</div>
            </div>
  
            <div class="payment-summary-row total-row">
              <div>Order total:</div>
              <div class="payment-summary-money">₹${formatCurrency(totalRupees)}</div>
            </div>
  
            <button class="place-order-button button-primary">
              Place your order
            </button>`;
    document.querySelector(".js-payment-summary").innerHTML=paymentSummaryHTML;
}