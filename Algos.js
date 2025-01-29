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



//   function maxProfit(stocks){

//     let lowerNumber=stocks[0];
//     let lowerNumberIndex;

//     stocks.map((stock,index)=>{
//     stock<lowerNumber ? (lowerNumber = stock, lowerNumberIndex=index)  : null
//    })

//    let highestNumber=stocks[lowerNumberIndex]

//    for (i=lowerNumberIndex;i<stocks.length;i++){
//     stocks[i]>highestNumber ? highestNumber = stocks[i] : null
//    }

//    return highestNumber-lowerNumber
// }


function maxProfit(stocks) {
    if (stocks.length < 2) {
      throw new Error("At least two stock prices are required to calculate profit.");
    }
  
    let minPrice = stocks[0];
    let maxProfit = 0;
  
    for (let i = 1; i < stocks.length; i++) {
      const currentPrice = stocks[i];
      const potentialProfit = currentPrice - minPrice;
  
      // Update maxProfit if the current potential profit is greater
      maxProfit = Math.max(maxProfit, potentialProfit);
  
      // Update minPrice if the current price is lower
      minPrice = Math.min(minPrice, currentPrice);
    }
  
    return maxProfit;
  }
  



var stockPrices= [7,1,5,3,6,0]

// console.log(maxProfit(stockPrices))

