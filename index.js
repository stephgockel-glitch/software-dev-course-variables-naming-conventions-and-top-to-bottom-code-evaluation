let customerName = "Alice";
let itemCount = 5;
let itemPrice = 4;   // NEW variable: cost per item
let currency = "USD"; // NEW variable: type of money
let totalCost = itemCount * itemPrice;
let purchaseMessage = customerName + " bought " + itemCount + " items for " + totalCost + " " + currency + ".";
console.log(purchaseMessage);
