// 2*:
// Преобразовать задание 1* таким образом,
//  чтобы первым делом в функции проверялся тип данных.
// //   И если он не Number - кидалась ошибка


function age(a) { 
    if(typeof a == 'number') {
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