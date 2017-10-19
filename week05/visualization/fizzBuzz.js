function isMultipleOfThree(number) {
    if (number % 3 === 0) {
        return true
    }
    return false
}

function isMultipleOfFive(number) {
    if (number % 5 === 0) {
        return true
    }
    return false
}

// start for loop
for (var i = 1; i < 101; i++) {
    if (isMultipleOfFive(i) && isMultipleOfThree(i)) {
        console.log('Fizzbuzz');
    } else if (isMultipleOfThree(i)) {
        console.log('Fizz');
    } else if (isMultipleOfFive(i)) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}