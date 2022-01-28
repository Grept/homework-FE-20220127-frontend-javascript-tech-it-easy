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
function displayItemInfo(item) {
    const itemInfoElement = document.getElementById("tv-info");
    itemInfoElement.innerHTML += `
        <p>${getInventoryItemName(item)}</p>
        <p>${formatItemPrice(item.price)}</p>
        <p>${getAvailableSizes(item.availableSizes)}</p>
    `;
}

// displayItemInfo(inventory[3]);

/*  4E  */
function displayAllItemsInfo(itemList) {
    for (let i = 0; i < itemList.length; i++) {
        displayItemInfo(itemList[i]);

        // Separate each item with a line for readability
        if (i !== itemList.length - 1) {
            const itemInfoElement = document.getElementById("tv-info");
            itemInfoElement.innerHTML += "<p>-----------------------------------------</p>"
        }

    }
}

// displayAllItemsInfo(inventory);
