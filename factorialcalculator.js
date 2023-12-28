function calcFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcFactorial(n - 1);
    }
}
console.log(calcFactorial(4))