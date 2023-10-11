let result = []

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz")
    } else if (i % 5 === 0) {
        result.push("Buzz")
    } else if (i % 3 === 0) {
        result.push("Fizz")
    } else {
        result.push(i)
    }
}

console.log(result)

result = ""

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.length ? result += ", FizzBuzz" : result += "FizzBuzz"
    } else if (i % 5 === 0) {
        result.length ? result += ", Buzz" : result += "Buzz"
    } else if (i % 3 === 0) {
        result.length ? result += ", Fizz" : result += "Fizz"
    } else {
        result.length ? result += `, ${i}` : result += `${i}`
    }
}

console.log(result)