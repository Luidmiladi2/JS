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



// Даны числа a и b. 
// Выведите строку с числами между а и b включая границы, 
// отсортированными по возрастанию.
//  Неизвестно, какое из чисел больше, но известно, что и a и b больше 0.

function Cycle_2(a, b) {
    var x = "";
    if (a<=b) 
    {
        for( i = a; i<=b; i=i+1)
        {
            x = x  + i + " "
        }
    }
    else if (a>b)
    {
       for(i = b; i<=a; i= i+ 1)
       {
           x = x + i + " "
       }
    }
   
    return x;
}

console.log(Cycle_2(9, 2))
console.log(Cycle_2(2, 9))



// Даны числа a и b.
//  Выведите строку с числами от большего числа до меньшего.
//   Известно, что и a и b больше либо равно 1, но неизвестно, какое из них больше

function Cycle_3(a, b) {

    var x = "";
    if (a<=b) 
    {
        for( i = b; i>=a; i=i-1)
        {
            x = x  + i + " "
        }
    }
    else if (a>b)
    {
       for(i = a; i>=b; i= i - 1)
       {
           x = x + i + " "
       }
    }
 
    return x;
}

console.log(Cycle_3(9, 2))
console.log(Cycle_3(2, 9))



// Даны числа a и b.
//  Найдите сумму квадратов чисел между a и b включительно.
//   Неизвестно, какое из чисел a или b больше.

function Cycle_4(a, b) {
    var x =0;
    if (a>=b)
    {
    for ( i=b; i<=a; i =i+1)
    {
        x = x+ i**2
    }
    }
    else if (a<=b)
    {
        for (i =a; i<=b; i = i+1) {
            x= x + i**2
        }
    }

    return x;
}

console.log(Cycle_4(9, 2))
console.log(Cycle_4(1, 4))



// Дано целое число n, большее 1.
//  Найти квадрат данного числа, используя формулу n^2 = 1 + 3 + 5 + ... + (2 * n - 1)n 
// 2
//  =1+3+5+...+(2∗n−1) .  Из функции необходимо вывести строку, состоящую из чисел, получающихся на каждом шаге при добавлении каждого слагаемого 
//  (таким образом, получится строка из квадратов всех чисел от 1 до n).

function Cycle_5(n) {
    
    var x='';
   var s =0
    for(i = 1; i<= (2*n -1); i= i+2)
    { s = s + i
        x= x + " " + s
     
      }
    return x;
}

console.log(Cycle_5(4))
console.log(Cycle_5(8))


// Дано число n (n > 0). 
// Верните из функции следующую сумму: 1 + 1.5 + 2 + 2.5 + ... + n1+1.5+2+2.5+...+n

function Cycle_6(n) {
    var x = 0;
    for( i=1; i<=n; i= i +0.5)
    { x= x + i}
    
    return x;
}

console.log(Cycle_6(4))

// Дано число n (n > 0). Верните из функции значение двойного факториала: n!! = n * (n - 2) * (n - 4) * ... * 2n!!=n∗(n−2)∗(n−4)∗...∗2 
// (или 1, в зависимости от четности n).

// Пример, для n = 5: n!! = 5 * 3 * 1 = 15n!!=5∗3∗1=15, для n = 6: n!! = 6*4*2=48n!!=6∗4∗2=48

function Cycle_7(n) {
    var x=1;
    if (n % 2 == 0){
        for ( i= n; i>=2; i= i-2)
        {
            x= x*i
        }
    }
    else if (n%2 !== 0)
    {
        for ( i= n; i>=1; i= i-2)
        {
            x= x*i
        }
    }
    
    
    return x;
}
    
    console.log(Cycle_7(4))

    function testCycle(n) {
        var x= "простое число" ;
        for( i = 2; i<=n; i= i+1)  {
            if (n%i == 0)
            {
                x= "состовное число"
            }
            else {
                x=x
            }
        }
        // Тут нужно написать решение
        return x;
    }

   console.log(testCycle(2))