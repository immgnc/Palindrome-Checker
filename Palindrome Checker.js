function palindrome(str) {
    let arr = []
    str = str.toLowerCase()
    arr = str.split("")
    arr = arr.filter(x=> x.replace(/\W|_/gi,"" ))
  
    let newArr = [...arr]
     for (let i=0; i<arr.length; i++){
       console.log(arr[i])
       console.log(newArr[arr.length-1])
       if (arr[i] != newArr[arr.length-i-1]) return false
     }
  return true;
  }
  
  console.log(palindrome("_eye"));