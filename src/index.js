// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    const exchangeRates = [{coinsName:'H', coinsValue: 50},
                        {coinsName:'Q', coinsValue: 25},
                        {coinsName:'D', coinsValue: 10},
                        {coinsName:'N', coinsValue: 5},
                        {coinsName:'P', coinsValue: 1},
    ];
    const error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let minimumCoins = {};
    
    if (currency > 10000) return error;

    for (let i = 0; currency > 0; i++) {
        let divisionResult = currency / exchangeRates[i].coinsValue;
        if(divisionResult >= 1) {
            minimumCoins[exchangeRates[i].coinsName] = Math.floor(divisionResult);
            currency = currency % exchangeRates[i].coinsValue;
        }
    }
    return minimumCoins;
}

