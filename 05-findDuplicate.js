function findDup(arr1, arr2) {
    const result1 = arr1.filter((items1) => arr2.includes(items1))

    const result2 = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result2.push(arr1[i])
            }
        }
    }
    console.log(result1, ": 1")
    console.log(result2, ": 2")
    return result1
}

const arr1 = ["alice", "bob", "trudy", "jack"]
const arr2 = ["janet", "alice", "james", "jack"]

findDup(arr1, arr2)