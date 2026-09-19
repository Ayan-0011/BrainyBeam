let n = 5 ;

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(64 + j))
    }
    console.log();
}


// for print alfhabet we use ascci no start from 65=A, 66=B, 67=C.... etc
// ascii no conver into string using "String.fromCharcode".