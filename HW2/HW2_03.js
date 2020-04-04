//Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.

let usrNum = +prompt('Введите трехзначное число'),
    units = (usrNum % 10),
    dozens = ((usrNum % 100) - units) / 10,
    hundred = (usrNum - (usrNum % 100)) / 100,
    answer = units != dozens && dozens != hundred ? 'одинаковых цифер нет' : 'есть одинаковые цифры';
alert(`В вашем числе ${answer}`);