// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.

//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. 

function age(a) { 
    if (a < 18) {
        console.log("You dont't have access cause you age is", a  + " " + "It's less then")
    } else if (a >= 18 && a < 60) {
        console.log("welcome")
    } else if (a > 60){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}

age(17);

age(18);

age(61);





