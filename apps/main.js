function findLongestWord(str){


let longestWord = ''

let words = str.split(' ')

for(let i = 0; i < words.length; i++){
    let word = words[i]
    
    if(word.length >= longestWord.length){
    
    longestWord = word
    }
}

return longestWord
}

console.log(findLongestWord("whats is the longestabsjhdbkjhaskd word in the string"))

