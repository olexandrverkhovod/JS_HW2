//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let usrNum = prompt('Введите пятиразрядное число');
if (usrNum == null || usrNum.length < 5) {
    alert('Введите ПЯТИРАЗРЯДНОЕ число');
} else {
    usrNum = +usrNum;
    alert('Число введено верно');
    let first = usrNum % 10,
        second = ((usrNum % 100) - first) / 10,
        fourth = ((usrNum % 10000) - (usrNum % 1000)) / 1000,
        fifth = (usrNum - (usrNum % 10000)) / 10000;

    if (first != fifth || second != fourth) {
        alert('Число не палендром');
    } else {
        alert('Число палиндром')
    }
}