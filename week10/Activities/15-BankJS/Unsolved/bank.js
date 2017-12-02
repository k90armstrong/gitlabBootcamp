var fs = require("fs");
var bankHistory = 'bank.txt';
var arguments = process.argv;
var command = arguments[2];
var transactionAmmount;
if (arguments[3]) {
    transactionAmmount = parseFloat(arguments[3]);
}
var lottoNumber = Math.random();
var win = false;

switch (command) {
    case 'withdraw':
        transactionAmmount = transactionAmmount * -1;
        break;
    case 'deposit':
        transactionAmmount = transactionAmmount;
        break;
    case 'lotto':
        if (lottoNumber > .8) {
            win = true;
            transactionAmmount = 10;
            console.log('You Win!');
        } else {
            transactionAmmount = -2;
            console.log('You lost!');

        }
        break;
    case 'total':
        fs.readFile(bankHistory, "UTF8", function (err, data) {
            if (!err) {
                var transactions = data.split(',');
                var total = 0;
                transactions.forEach(function (trans) {
                    total += parseFloat(trans);
                });
                console.log('Total: ' + total);
            }
        });
}

if (command === 'deposit' || command === 'withdraw' || command === 'lotto') {
    fs.appendFile(bankHistory, ',' + transactionAmmount, function (err) {
        if (!err) {
            console.log('You ' + command + 'ed ' + transactionAmmount);
        }
    })
}