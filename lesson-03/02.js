// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {

    let result= number % 2

    if (result === 0) {
        console.log('chetnoye blyat');
        return true
    } else {
        console.log('nechetnoe');
        return false
    }
}

isEven(3);
