//Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let circumference = +prompt('Введите длину окружности'),
    squarePerimeter = +prompt('Введите периметр крадрата');

if (squarePerimeter == 0 || isNaN(squarePerimeter)) {
    alert('Введите правильные данные');
} else {
    let answer = (circumference / Math.PI) <= (squarePerimeter / 4) ? alert('Окружность вписывается в квадрат') : alert('Окружность не вписывается в квадрат');
}