const sentence = "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous."

const specialChar = /[~`!@#$%^&*()_\+{}\[\]\\:;"',./<>?]/g

function findMostSequenceWords(sentence) {
    const wordsStore = {}
    const newSentence = sentence.toLowerCase().replace(/[^-a-z\s]/g, "").replace(/[-]/g, " ").split(/\s+/)
    for (let i = 0; i < newSentence.length; i++) {
        const word = newSentence[i]
        if (!wordsStore[word]) {
            wordsStore[word] = 1
        } else {
            wordsStore[word]++
        }
    }

    let maxSequence = ""
    let maxCount = 0
    for (let i in wordsStore) {
        // console.log(i)
        if (wordsStore[i] > maxCount) {
            maxSequence = i
            maxCount = wordsStore[i]
        }
    }
    console.log(maxSequence)
    return `MostSequence: ${maxSequence} : ${maxCount}`
}

// findMostSequenceWords(sentence)

findMostSequenceWords(sentence)