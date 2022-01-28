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
itemInfo.appendChild(showAmbilightButton);
itemInfo.appendChild(showSoldOutButton);

// DECLARE FUNCTIONS FOR BUTTONS
function clearElement(elemendID) {
    document.getElementById(elemendID).innerHTML = "";
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

function showAmbilightItems(itemList) {
    return itemList.filter((item) => {
        return item.options.ambiLight;
    })
}


// ADD EVENT LISTENERS
showAllItemsButton.addEventListener("click", () => {
    clearElement("tv-info");
    displayAllItemsInfo(inventory)
});

sortPriceButton.addEventListener("click", () => {
    clearElement("tv-info");
    sortPrice(inventory);
    displayAllItemsInfo(inventory);
})

sortNameButton.addEventListener("click", () => {
    clearElement("tv-info");
    sortName(inventory);
    displayAllItemsInfo(inventory);
})

showAmbilightButton.addEventListener("click", () => {
    clearElement("tv-info");
    displayAllItemsInfo(showAmbilightItems(inventory));
})

showSoldOutButton.addEventListener("click", () => {
    clearElement("tv-info");
    displayAllItemsInfo(soldOutItems(inventory))
});


