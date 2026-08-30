// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
 let biggest

 if(number1>number2){
    biggest=number1
 } else {biggest=number2};

 if(biggest<number3){biggest=number3}

 
 
    return biggest
}
