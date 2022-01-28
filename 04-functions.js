/*  4A  */
function getInventoryItemName(item) {
    return `${item.brand} ${item.type} - ${item.name}`;
}

console.log(getInventoryItemName(inventory[1]));


/*  4B  */
function formatItemPrice(price) {
    // check if price has decimal places or is whole number
    if (price % 1 === 0) {
        return `€${price},-`;
    } else return `€${price}`;
}

console.log(formatItemPrice(inventory[1].price))


/*  4C  */
function getAvailableSizes(itemSizeList) {
    let availableSizesString = "";
    for (let i = 0; i < itemSizeList.length; i++) {
        availableSizesString += `${itemSizeList[i]} inches (${itemSizeList[i] * 2.54} cm)`;
        if (i !== (itemSizeList.length - 1)) {
            availableSizesString += " | ";
        }
    }

    return availableSizesString;
}

console.log(getAvailableSizes(inventory[7].availableSizes));


/*  4D  */

// function displayItemInfo(item) {
//     const itemInfoElement = document.getElementById("tv-info");
//     itemInfoElement.innerHTML += `
//         <p>${getInventoryItemName(item)}</p>
//         <p>${formatItemPrice(item.price)}</p>
//         <p>${getAvailableSizes(item.availableSizes)}</p>
//     `;
// }

function getItemInfo(item) {
    // This function returns list-items which contain all the info for a single item.
    const itemInfoElement = document.createElement("li");

    itemInfoElement.innerHTML = `
        <h4 class="item-name">${getInventoryItemName(item)}</h4>
        <p class="item-price">${formatItemPrice(item.price)}</p>
        <p class="item-sizes">${getAvailableSizes(item.availableSizes)}</p>
    `;

    return itemInfoElement;
}


/*  4E  */
function displayAllItemsInfoList(itemList) {
    // Creat an unordered list inside tv-info div
    const itemInfoElement = document.getElementById("tv-info");
    const unorderedListElement = document.createElement("ul");
    itemInfoElement.appendChild(unorderedListElement);

    for (let i = 0; i < itemList.length; i++) {
        // Add list-items to the unordered list.
        unorderedListElement.appendChild(getItemInfo(itemList[i]));
    }
}

