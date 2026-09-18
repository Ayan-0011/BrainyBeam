function contains(arr, target) {
    let existe = false;

    for(let i=0; i<arr.length;i++){
        if(arr[i] === target){
            existe = true;
            break;
        }
    }
    return existe
}

console.log(contains([10, 20, 30, 40], 30)); // true
console.log(contains([10, 20, 30, 40], 50)); // false