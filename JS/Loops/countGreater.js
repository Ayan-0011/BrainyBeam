function countGreater(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) {
            count++
        }
    }
    return count
}

console.log(countGreater([5, 15, 8, 20, 12], 10));