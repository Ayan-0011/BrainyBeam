function Twosum(num, target) {
    for (i = 0; i <= num.length; i++) {
        for (j = i + 1; j <= num.length; j++) {
            if(num[i]+num[j] == target){
                return [i, j]
            }
        }
    }
}

console.log(Twosum([2, 7, 9, 11, 19], 9))