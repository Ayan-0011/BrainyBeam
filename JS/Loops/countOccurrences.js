function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count
}

console.log(countOccurrences([2, 5, 2, 8, 2, 9], 2));
console.log(countOccurrences([1, 2, 3, 4], 9));