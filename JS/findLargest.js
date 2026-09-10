function findLargest(arr) {

    var largest = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest
}

console.log(findLargest([10, 5, 25, 8, 15]))