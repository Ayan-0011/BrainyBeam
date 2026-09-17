function sumEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i]
        }
    }
    return sum
}

console.log(sumEven([1, 2, 4, 7, 8, 10]))