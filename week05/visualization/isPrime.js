function isPrime(number) {
    if (number < 1) {
        return false
    }
    // find a faster way to do this!
    for (var i = 2; i < number; i++) {
        if (number % i === 0 && i < number) {
            return false
        }
    }
    return true
}
for (var i = 1; i < 1000; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}