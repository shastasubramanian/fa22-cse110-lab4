function discountPrices(prices, discount){
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i < prices.length; i++){       
        const discountedPrice = prices[i]*(1-discount);
        discounted.push(discountedPrice);
    }
    return discounted;
}

var output=discountPrices([100, 200, 300], 0.5);
for(var i = 0; i < output.length; i++)
    console.log(output[i]);