
// Написать скриптик, который сосчитает и выведет результат
//  от возведения 2 в степень 10, начиная со степени 1


for (i=1; i<=10; i= i+1){ 
    console.log(2**i)
}


// // Преобразовать 1 задачу в функцию, 
// // принимающую на вход степень, в которую будет возводиться число 2

 function step_1(n) { 
  for (i=1; i<=n; i= i+1)
    { 
         console.log(2**i)
    }
  }
step_1(3)
 



// //  Написать скрипт, который выведет 5 строк в консоль таким образом, 
// //  чтобы в первой строчке выводилось :), во второй :):) и так далее
// // Пример в консоли:
// // :)
// // :):)
// // :):):)
// // :):):):)
// // :):):):):)
for (i= 1; i<=5; i= i+1) {
  console.log(":)".repeat(i));
}


// // Преобразовать 2 задачу в функцию, принимающую на вход строку,
// //  которая и будет выводиться в консоль (как в условии смайлик),
// //   а также количество строк для вывода 
// // e.g. function printSmile(stroka, numberOfRows)


function printSmile(stroka,numberOfRows) {
    
 for (i= 1; i<=numberOfRows; i= i+1)
  {
    console.log(stroka.repeat(i))
}
}
printSmile(":)", 5)



// // 3**.  Написать функцию, которая принимает на вход слово.
// //  Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// // e.g. function getWordStructure(word)
// // В консоли: 
// // Слово (word) состоит из  (число) гласных и (число) согласных букв

// // Проверки: 'case', 'Case', 'Check-list'

 function getWordStructure(str) {

  let massiv = str.toLowerCase().split("")
  let gl = "aeiouy"
  let sgl = "bcdfghjklmnpqrstvwxz"          
  let result = 0;
  let result_1 = 0;
  for(let i = 0; i < massiv.length; i++) {
    result = gl.includes(massiv[i]) ? result + 1 : result;
}
  
  for(let i = 0; i < massiv.length; i++) {
    result_1 = sgl.includes(massiv[i]) ? result_1 + 1 : result_1;
 }
  console.log("Слово" + " " +  str + " " + "состоит из" + " " + result + " " + "гласных и" + " " +  result_1 + " " + "согласных" )
}

getWordStructure("Check-list")
getWordStructure("Case")
getWordStructure("case")


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

 function isPalindrom(strr) {
 let reversed = strr.toLowerCase().split("").reverse().join("");
 return strr.toLowerCase() == reversed
   ? console.log(strr + "- палиндром")
   : console.log(strr + "- не палиндром");

 }


 isPalindrom("AbBa")

