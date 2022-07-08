function pow1(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

//рекурсия
function pow2(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow2(x, n - 1);
    }
}