function sumOfProducts(...numbers){

 let  sum = numbers.reduce(function(acc,curr){
        return acc+ curr

    },0)
    return sum
    


}
console.log("Your total cart value is");
console.log(sumOfProducts(10,24,39));

