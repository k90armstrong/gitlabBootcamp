var message = "Sriracha goes great on nothing!";
console.log(message);

var arguments = process.argv;

var calcType = arguments[2];
var input1 = parseFloat(arguments[3]);
var input2 = parseFloat(arguments[4]);

switch (calcType) {
    case 'add':
        console.log(input1 + input2);
        break;
    case 'subtract':
        console.log(input1 - input2);
        break;
    case 'multiply':
        console.log(input1 * input2);
        break;
    case 'divide':
        console.log(input1 / input2);
        break;
    case 'remainder':
        console.log(input1 % input2);
        break;
}