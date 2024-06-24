function findMaxMinPriceProducts(products) {
    // if (products.length === 0) {
    //     console.log("No products available.");
    //     return;
    // }

    let maxPriceProduct = products[0];
    let minPriceProduct = products[0];

    for (let i = 1; i < products.length; i++) {
        if (products[i].price > maxPriceProduct.price) {
            maxPriceProduct = products[i];
        }

        if (products[i].price < minPriceProduct.price) {
            minPriceProduct = products[i];
        }
    }

    console.log("Product with the highest price:", maxPriceProduct);
    console.log("Product with the lowest price:", minPriceProduct);
}

const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
  ];
  

findMaxMinPriceProducts(products);
