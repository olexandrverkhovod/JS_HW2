//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let us = +prompt('Введите сумму в долларах'),
    currency = prompt('Введите валюту (EUR, UAH или AZN)');

if (us == 0 || currency == null) {
    alert('Вы забыли ввести один из предложенных параметров');
} else {
    const EUR = 0.93;
    const UAH = 27.42;
    const AZN = 1.70;

    switch (currency.toLowerCase()) {
        case 'eur':
            alert(`Вы получите ${(us * EUR).toFixed(2)} евро`);
            break;
        case 'uah':
            alert(`Вы получите ${(us * UAH).toFixed(2)} гривен`);
            break;
        case 'azn':
            alert(`Вы получите ${(us * AZN).toFixed(2)} манат`);
            break;
        default:
            alert('Нет такой валюты');
            break;
    }

}