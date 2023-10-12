function twoNumbers(number, input) {
    for (let i = 0; i < number.length; i++) {
        for (let j = 1; j < number.length; j++) {
            if (number[i] + number[j] === input) {
                console.log(i, j)
                return true
            }
        }
    }
}

const num = [1, 5, 13, 2, 7, 6]

twoNumbers(num, 11)