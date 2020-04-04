// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

let points = 0,
    firstQuestion = prompt('Итальянский производитель суперкаров начавший историю с тракторов : Porshe, Lamborhgini, Bugatti');
if (firstQuestion == null) {
    alert('Не правильные данные');
} else {
    firstAnswer = firstQuestion.toLowerCase() == 'lamborhgini' || firstQuestion.toLowerCase() == 'lamba' || firstQuestion.toLowerCase() == 'ламба' || firstQuestion.toLowerCase() == 'ламборгини' ? alert(`Верно. Вам начисленно ${points += 2} бала`) : alert('Не верно');
}

let secondQuestion = prompt('Первый, комерчиский, производитель электромобилей базирующийся в США : Toyota, Nissan, Tesla');
if (secondQuestion == null) {
    alert('Не правильные данные');
} else {
    secondQuestion.toLowerCase() == 'tesla' || secondQuestion.toLowerCase() == 'тесла' ? alert(`Верно. Вам начисленно 2 бала. У Вас ${points += 2} бала(ов)`) : alert('Не верно');
}

let thirdQuestion = prompt('Первый производитель применивший 4WD в ралли : Subaru, Audi, Lancia');
if (thirdQuestion == null) {
    alert('Не правильные данные');
} else {
    thirdQuestion.toLowerCase() == 'audi' || thirdQuestion.toLowerCase() == 'ауди' ? alert(`Верно. Вам начисленно 2 бала. У Вас ${points += 2} бала(ов)`) : alert('Не верно');
}

alert(`Результат, - ${points} бала(ов)`);