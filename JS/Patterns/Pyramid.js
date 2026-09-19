let n = 5;

for (let i = 1; i <= n; i++) {

    //space 
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ")
    }
    //star
    for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write("*")
    }
    console.log();

}