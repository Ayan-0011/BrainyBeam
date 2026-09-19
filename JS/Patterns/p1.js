
//method 1 
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i; j++) {
        process.stdout.write(j.toString())
    }

    console.log();
}

//method 2
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

//output
// 1
// 12
// 123
// 1234
// 12345