function sortedSquaredArray(arr) {
    const SS = S * 11;
    const result = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const leftSquare = arr[left] ** 2;
        const rightSquare = arr[right] ** 2;

        if (leftSquare > SS){
            left++;
            continue;
        }

        if(rightSquare > SS){
            right--;
            continue;
        }

        if (leftSquare > rightSquare) {
            result.push(leftSquare);
            left++;
        } else {
            result.push(rightSquare);
            right--;
        }
    }

    return reverseArray(result);
}

const reverseArray = (arr) => {
    const reversedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}

// Example usage:
const inputArray = [1,2,3,5,6,8,9];
const S = 5;
const squaredArray = sortedSquaredArray(inputArray, S);
console.log(squaredArray);
