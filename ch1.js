const switchAlgorithm = (arr) => {

    const newArray = [];

    for (let i = arr.length - 1 ; i >= 0; i--) {

        let number = arr[i];
        let multiplier = 1;
        let result = null;

        while (number > 0){
            const digit = number % 10;
            if (digit < S){
                result += digit * multiplier;
                multiplier = multiplier * 10;
            }
            number = Math.floor(number / 10);
        }

        if (result === null)
            continue;
        newArray.push(result);
    }

    return newArray;
}

const S = 5;
const sample = [66,1,5,6,87,4,2,3,4,84,98,564,198,561,1,132,364,8];
const sorted = switchAlgorithm(sample);
console.log(sorted)
