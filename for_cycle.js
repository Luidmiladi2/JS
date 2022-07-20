//1.найти сумму всех целых чисел от 1 до n включительно и вернуть функции их результат

function SumCycle(n) {
    let x = 0;
    for (  i = 1; i <= n; i = i + 1)
    {
        x = x + i;
    }
 return x;
}
console.log(SumCycle(3))
console.log(SumCycle(6))






// Даны два целых числа k и n. 
// Верните из функции строку, которая состоит из чисел n, повторяющихся k раз, разделенных пробелом. 
// Известно, что и k и n больше либо равно 1.

function NumCycle(k,n) {
    let x =""
    for (i =1 ; i<=k; i= i +1)
    {
        x = x + " " + n
    }
    return x
}
console.log(NumCycle(7,4))



// Даны числа a и b.
//  Выведите строку с числами от а до b, разделенных пробелами.
//   Известно, что b больше a.

function Cycle_1(a,b){

x=''
for ( i= a; i<=b; i=i+1)
{
    x= x + " " + i
}
return x
}
console.log(Cycle_1(4,7))
