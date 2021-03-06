export { };

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

// You are allowed to change this function
function convertToUSD(price: number, exchangeRateToUSD: number, fee: number): number {
    return exchangeRateToUSD * price * fee;

}
// You are allowed to change this function
function convertToBRL(price: number, exchangeRateToBRL: number, fee: number): number {
    return exchangeRateToBRL * price * fee;

}

const product = "You don't know JS";
const price = 12.5;
const exchangeRateToUSD = 1.4;
const fee = 1.01;
const exchangeRateToBRL = 6.13;
const priceInUSD = convertToUSD(price, exchangeRateToUSD, fee).toFixed(2);
const priceInBRL = convertToBRL(price, exchangeRateToBRL, fee).toFixed(2);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/