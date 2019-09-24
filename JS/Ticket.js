var numPool2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffle(numPool2){
    for(var j, x, i = numPool2.length; i; j = parseInt(Math.random() * i), x = numPool2[--i], numPool2[i] = numPool2[j], numPool2[j] = x);
    return numPool2;
};
var randomResult2 = shuffle(numPool2);


var number = randomResult2.pop();
var number2 = randomResult2.pop();
var number3 = randomResult2.pop();
var number4 = randomResult2.pop();
var number5 = randomResult2.pop();
var number6 = randomResult2.pop();
var number7 = randomResult2.pop();
var number8 = randomResult2.pop();
var number9 = randomResult2.pop();






