function findFiboNum(input) {
    const fiboNum = [0, 1]
    let result = 0
    for (let i = 2; i < input; i++) {
        fiboNum.push(fiboNum[i - 1] + fiboNum[i - 2])
        result = fiboNum[i - 1] + fiboNum[i]
    }
    return result
}

findFiboNum(12)