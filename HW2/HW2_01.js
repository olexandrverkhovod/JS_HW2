// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let usrAge = +prompt('Введите свой возраст');

switch (true) {
    case usrAge > 0 && usrAge < 12:
        alert('Ты ребенок');
        break;
    case usrAge >= 12 && usrAge < 18:
        alert('Ты подросток');
        break;
    case usrAge >= 18 && usrAge <= 60:
        alert('Вы взрослый человек');
        break;
    default:
        alert('Вы, или слишком стары, или еще не родились');
        break;
}

//or_this_variant----------------------------------

if (usrAge > 0 && usrAge < 12) {
    alert('Ты ребенок');
} else if (usrAge >= 12 && usrAge < 18) {
    alert('Ты подросток');
} else if (usrAge >= 18 && usrAge <= 60) {
    alert('Вы взрослый человек');
} else {
    alert('Вы, или слишком стары, или еще не родились');
}