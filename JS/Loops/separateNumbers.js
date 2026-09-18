function separateNumbers(arr) {
    let positive = [];
    let negetive = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive.push(arr[i]);
        } else if (arr[i] < 0) {
            negetive.push(arr[i])
        }
    }

    return {
        positive: positive,
        negetive: negetive
    };
}

console.log(separateNumbers([5, -2, 8, -10, 3, -1]));