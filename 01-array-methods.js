/*  1A  */
const tvNames = inventory.map((item) => {
    return item.name;
})

console.log(tvNames);

/*  1B  */
const soldOutItems = inventory.filter((item) => {
    return item.originalStock === item.sold;
})

console.log(soldOutItems);

/*  1C  */
const ambiLightTVs = inventory.filter((item) => {
    return item.options.ambiLight;
})

console.log(ambiLightTVs);

/*  1D  */
inventory.sort((a, b) => {
    if(a.price < b.price) {
        return -1;
    } else if (a.price > b.price) {
        return 1;
    } else {
        return 0;
    }
})

console.log(inventory);