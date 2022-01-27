/*  3A  */
// const inventoryBrands = inventory.map((item) => {
//    return item.brand;
// });
//
// console.log(inventoryBrands);
//
// const inventoryBrandsElement = document.getElementById("tv-brands");
// for (let i = 0; i < inventoryBrands.length; i++) {
//    inventoryBrandsElement.innerHTML += `<p>${inventoryBrands[i]}</p>`;
// }

/*  3B   */
function listItemBrandsOnPage(itemList, elementID) {
   const inventoryBrands = itemList.map((item) => {
      return item.brand;
   });

   const inventoryBrandsElement = document.getElementById(elementID);
   for (let i = 0; i < inventoryBrands.length; i++) {
      inventoryBrandsElement.innerHTML += `<p>${inventoryBrands[i]}</p>`;
   }
}

listItemBrandsOnPage(inventory, "tv-brands");