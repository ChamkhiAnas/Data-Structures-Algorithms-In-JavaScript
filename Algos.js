function ReverseText(text){
    const textArray=text.split('')
    const reversed=textArray.reverse()
    return reversed.toString('').replaceAll(',','')
}


function CompareText(firstText){
    const firstTextReversed=ReverseText(firstText)
    return firstText==firstTextReversed ?  "isPalindrome" :  "NotPalindrome"
}
console.log(CompareText('radara'))