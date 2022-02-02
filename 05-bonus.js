/*  5A  */
// GET PARENT ELEMENT
const itemInfo = document.getElementById("tv-info-buttons");


// CREATE BUTTONS
const showAllItemsButton = document.createElement("button");
showAllItemsButton.setAttribute("class", "show-all");
showAllItemsButton.textContent = "Show All TVs";

const sortPriceButton = document.createElement("button");
sortPriceButton.setAttribute("class", "sort-button-price");
sortPriceButton.textContent = "Sort by Price";

const sortNameButton = document.createElement("button");
sortNameButton.setAttribute("class", "sort-name-button")
sortNameButton.textContent = "Sort by Name"

const sortStockButton = document.createElement("button");
sortStockButton.setAttribute("class", "sort-stock-button")
sortStockButton.textContent = "Sort by Stock"

const showAmbilightButton = document.createElement("button");
showAmbilightButton.setAttribute("class", "show-ambilight");
showAmbilightButton.textContent = "Show Ambilight TVs";

const showSoldOutButton = document.createElement("button");
showSoldOutButton.setAttribute("class", "show-sold-out");
showSoldOutButton.textContent = "Show Sold Out TVs";


// ADD BUTTONS TO PARENT
itemInfo.appendChild(showAllItemsButton);
itemInfo.appendChild(sortPriceButton);
itemInfo.appendChild(sortNameButton);
itemInfo.appendChild(sortStockButton)
itemInfo.appendChild(showAmbilightButton);
itemInfo.appendChild(showSoldOutButton);


// DECLARE FUNCTIONS FOR BUTTONS
function clearElement(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

function soldOutItems(itemList) {
    const soldOutItems = itemList.filter((item) => {
        return item.originalStock === item.sold;
    })

    return soldOutItems;
}

function sortPrice(itemList) {
    itemList.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        } else if (a.price > b.price) {
            return 1;
        } else return 0;
    })
}

function sortName(itemList) {
    itemList.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else return 0;
    })
}

function sortStock(itemList) {
    itemList.sort((a, b) => {
        if ((a.originalStock - a.sold) > (b.originalStock - b.sold)) {
            return -1;
        } else if ((a.originalStock - a.sold) < (b.originalStock - b.sold)) {
            return 1;
        } else return 0;
    })
}

function showAmbilightItems(itemList) {
    return itemList.filter((item) => {
        return item.options.ambiLight;
    })
}


// ADD EVENT LISTENERS
showAllItemsButton.addEventListener("click", () => {
    clearElement("tv-info");
    displayAllItemsInfoList(inventory)
});

sortPriceButton.addEventListener("click", () => {
    clearElement("tv-info");
    sortPrice(inventory);
    displayAllItemsInfoList(inventory);
})

sortNameButton.addEventListener("click", () => {
    clearElement("tv-info");
    sortName(inventory);
    displayAllItemsInfoList(inventory);
})

sortStockButton.addEventListener("click", () => {
    clearElement("tv-info");
    sortStock(inventory);
    displayAllItemsInfoList(inventory);
})

showAmbilightButton.addEventListener("click", () => {
    clearElement("tv-info");
    displayAllItemsInfoList(showAmbilightItems(inventory));
})

showSoldOutButton.addEventListener("click", () => {
    clearElement("tv-info");
    displayAllItemsInfoList(soldOutItems(inventory))
});


