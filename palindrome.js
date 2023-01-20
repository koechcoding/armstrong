function isPalindrome(word) {
    let stringArray = []
    for(letters of word){
      stringArray.push(letters)
    }
    let stringArray2 = [...stringArray]
    //iterating from left to right
    let leftIteration = []
    for(let i = 0;i < stringArray.length;){
      leftIteration.push(stringArray.splice(0,1))
    }
    //iterating from right to left
    let rightIteration = []
    for(let i = 0;i < stringArray2.length;){
      rightIteration.push(stringArray2.splice(-1,1))
    }
    //comparing the results
    let result = rightIteration.toString() == leftIteration.toString()
    return result
  }
  
  
  // You can run `node palindrome.js` to view these console logs
  if (require.main === module) {
    console.log("=>", isPalindrome("racecar"));
    console.log("=>", isPalindrome("human"));
  }