const minAmountOfChange = (coins) => {
    let minChange = 1; // Initialize the minimum change to 1
    coins.sort((a, b) => a - b); // Sort the coins in ascending order

    for (const coin of coins) {
        if (coin <= minChange) {
            minChange += coin; // Update the minimum change
        } else {
            break; // Stop when you cannot make minChange
        }
    }

    return minChange;
}

// Example usage:
const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
const minChange = minAmountOfChange(coins);
console.log(minChange);
