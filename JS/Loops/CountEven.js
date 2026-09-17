function countEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++
        }
    }
    return count
}

console.log(countEven([1, 2, 4, 7, 8, 10]));