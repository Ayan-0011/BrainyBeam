function revers(arr) {

    let rev = [];

    for (i = arr.length; i >= 0; i--) {
        rev += arr[i]
    }
    return rev
}

console.log(revers([1, 2, 3, 4, 5]));