// 3**:
// Преобразовать HW_1_2 таким образом, чтобы значение '2'
//  (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
//  преобразовываясь в number


function age(a) { 
    a = Number(a) 
    if (!isNaN(a)) {
    if (a < 18) {
        console.log("You dont't have access cause you age is", a  + " " + "It's less then")
    } else if (a >= 18 && a < 60) {
        console.log("welcome")
    } else if (a > 60){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
} else console.log("No ")
}
age(17);

age(18);

age('jk');
age('45')