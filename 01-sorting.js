// Example case
let numbers = [40, 1, 23, 400, 99, 100];
let inputs = [2, 3, 8, 1, 4, 5, 9, 7, 6]

const sortingMin = (arr) => {
    let prevVal = 0
    for (let i = 0; i < arr.length;) {
        if (arr[i] > arr[i + 1]) {
            prevVal = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = prevVal
            i--
        } else {
            i++
        }
    }
    return arr
}

const sortingMax = (arr) => {
    let prevVal
    for (let i = 0; i < arr.length;) {
        if (arr[i] < arr[i + 1]) {
            prevVal = arr[i + 1]
            arr[i + 1] = arr[i]
            arr[i] = prevVal
            i--
        } else {
            i++
        }
    }
    return arr
}

console.log("min:", sortingMin(numbers))
console.log("min:", sortingMin(inputs))
console.log("max:", sortingMax(numbers))
console.log("max:", sortingMax(inputs))
