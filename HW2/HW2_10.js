//Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

let usrDate = +prompt('Введите день (число в формате "2")'),
    usrMonth = +prompt('Введите месяц (номер в формате "4")'),
    usrYear = +prompt('Введите год в формате "2019"');

if (isNaN(usrDate) || isNaN(usrMonth) || isNaN(usrYear) || usrDate > 31 || usrMonth > 12) {
    alert('Введите данные в правильном формате');
} else {

    usrDate = ++usrDate;

    if (usrDate >= 30 && usrMonth == 2 && ((usrYear % 400) == 0 || (usrYear % 4) == 0 && (usrYear % 100) != 0)) {
        usrDate = 1;
        usrMonth = ++usrMonth;
    } else if (usrDate >= 29 && usrMonth == 2 && ((usrYear % 400) != 0 || (usrYear % 4) != 0 && (usrYear % 100) == 0)) {
        usrDate = 1;
        usrMonth = ++usrMonth;
    }

    if (usrDate >= 30 && (usrMonth == 4 || usrMonth == 6 || usrMonth == 9 || usrMonth == 11)) {
        usrDate = 1;
        usrMonth = ++usrMonth;
    } else if (usrDate >= 31) {
        usrDate = 1;
        usrMonth = ++usrMonth;
    }

    if (usrMonth >= 13) {
        usrMonth = 1;
        usrYear = ++usrYear;
    }

    alert(usrDate + '.' + usrMonth + '.' + usrYear);
}