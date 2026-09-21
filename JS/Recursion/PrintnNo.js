function no(n) {
    if (n > 10) {
        return;
    }

    console.log(n);
    no(n + 1)
}
no(1)

