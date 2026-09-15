function revers(arr) {

    let rev = [];

    for (i = arr.length; i >= 0; i--) {
        rev.push(arr[i])
    }
    return rev
}

console.log(revers([1, 2, 3, 4, 5]));


function revers(str) {

    let rev = [];

    for (i = str.length; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

console.log(revers("hello"));


