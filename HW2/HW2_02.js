//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let usrSmbl = +prompt('Введите целое число от 0 до 9');

switch (usrSmbl) {
    case 0:
        alert('Ваш символ - )');
        break;
    case 1:
        alert('Ваш символ - !');
        break;
    case 2:
        alert('Ваш символ - @');
        break;
    case 3:
        alert('Ваш символ - #');
        break;
    case 4:
        alert('Ваш символ - $');
        break;
    case 5:
        alert('Ваш символ - %');
        break;
    case 6:
        alert('Ваш символ - ^');
        break;
    case 7:
        alert('Ваш символ - &');
        break;
    case 8:
        alert('Ваш символ - *');
        break;
    case 9:
        alert('Ваш символ - (');
        break;
    default:
        alert('Символ для этого числа не предусмотрен');
        break;
}