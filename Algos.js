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


function fizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0 &&  i%5==0){
            console.log('FizzBuzz')
        }
        else if(i%3==0){
            console.log('Fizz')
        }
        else if(i%5==0){
            console.log('Buzz')
        }
        else {
            console.log(i)
        }

    }
}


console.log(fizzBuzz(8))