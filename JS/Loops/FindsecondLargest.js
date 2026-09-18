function secondLargest(arr) {

    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}

console.log(secondLargest([10, 5, 25, 8, 20]));