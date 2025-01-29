function ReverseText(text){
    const textArray=text.split('')
    const reversed=textArray.reverse()
    return reversed.toString('').replaceAll(',','')
}


function CompareText(firstText){
    const firstTextReversed=ReverseText(firstText)
    return firstText==firstTextReversed ?  "isPalindrome" :  "NotPalindrome"
}


function ReverseInt(number){
    return parseInt(number.toString().split('').reverse().join(''))
}


function SentenceCapitalization(text){
    const splitText= text.replace(/\s+/g, " ").toLowerCase().trim().split(' ')
    const arrayText= splitText.map((item)=>{
        return item[0].toUpperCase()+item.slice(1)
    })

    return arrayText.join(',').toString().replaceAll(',',' ');

}



console.log(SentenceCapitalization("subcomandante marocs "))