const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };
  
  function printProductDetails(details) {
    console.log("Below are the product details.");
    for (const [key, value] of Object.entries(details)) {
      console.log(`${key} : ${value}`);
    }
  }
  
  // Call the function with the productDetails object
  printProductDetails(productDetails);
  