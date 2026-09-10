function findSmallest(arr) {

    let smallest = arr[0];

    for(i=0; i<=arr.length; i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return smallest
}

console.log(findSmallest([10, 5, 25, 8, 15]));