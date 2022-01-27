/*  2A  */
let soldItems = 0;
for (let i = 0; i < inventory.length; i++){
    soldItems += inventory[i].sold;
}

console.log(soldItems);

/*  2B  */
const itemsSoldElement = document.getElementById("items-sold");
itemsSoldElement.innerHTML = `
    <h3 class="items-sold">Items Sold</h3>
    <p class="items-sold">${soldItems}</p>  
`;

/*  2C  */
let totalOriginalStock = 0;
for (let i = 0; i < inventory.length; i++){
    totalOriginalStock += inventory[i].originalStock;
}

console.log(totalOriginalStock);
