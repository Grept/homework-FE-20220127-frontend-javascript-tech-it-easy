/*  2A  */
let itemsSold = 0;
for (let i = 0; i < inventory.length; i++) {
    itemsSold += inventory[i].sold;
}

console.log(itemsSold);


/*  2B  */
const itemsSoldElement = document.getElementById("items-sold");
itemsSoldElement.innerHTML = `
    <h3>Items Sold:</h3>
    <p class="items-sold">${itemsSold}</p>  
`;


/*  2C  */
let itemsBought = 0;
for (let i = 0; i < inventory.length; i++) {
    itemsBought += inventory[i].originalStock;
}

console.log(itemsBought);


/*  2D  */
const itemsBoughtElement = document.getElementById("items-bought");
itemsBoughtElement.innerHTML = `
    <h3>Items Bought:</h3>
    <p class="items-bought">${itemsBought}</p>
`;


/*  2E  */
let itemsToSell = itemsBought - itemsSold;
const itemsToSellElement = document.getElementById("items-to-sell");
itemsToSellElement.innerHTML = `
  <h3>Items to Sell:</h3>
  <p class="items-to-sell">${itemsToSell}</p>  
`;
