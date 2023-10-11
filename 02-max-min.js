let inputs = [6, 1, -50, 200, 7, 9, -13, 20]

const findMax = (arr) => {
    let max
    for (let i = 0; i < arr.length; i++) {
        if (!max) {
            max = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax(inputs))

const findMin = (arr) => {
    let min
    for (let i = 0; i < arr.length; i++) {
        if (!min) {
            min = arr[i]
        } else if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

console.log(findMin(inputs))