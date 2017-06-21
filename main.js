
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomNumber = getRandom(1, 5);
console.log (randomNumber);

var startPlay = confirm ( 'Хотите начать игру?' );

var usersNumber;
var endPlay;

function cycle () {
    var i = 0;
    while (i<3) {
        usersNumber = +prompt ( 'Введите число:', 5 );
        if (usersNumber == randomNumber) {
            alert ('Вы выиграли 10$');
            endPlay = confirm ('Хотите продолжить?');
            if (endPlay != true) break;
        }
        ++i;
    }
}

if (startPlay == true) {   
    cycle ();
    if (endPlay == true) cycle();
} else {
    alert ( 'Сегодня вы не выиграили миллион, а могли!' );
}

