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



  function maxProfit(stocks){

    let lowerNumber=stocks[0];
    let lowerNumberIndex;

    stocks.map((stock,index)=>{
    stock<lowerNumber ? (lowerNumber = stock, lowerNumberIndex=index)  : null
   })

   let highestNumber=stocks[lowerNumberIndex]

   for (i=lowerNumberIndex;i<stocks.length;i++){
    stocks[i]>highestNumber ? highestNumber = stocks[i] : null
   }

   return highestNumber-lowerNumber
}


var stockPrices= [7,1,5,3,6,0]


function maxProfit(stocks) {
    if(stocks.length<2){
        throw new Error("At least two stock prices are required to calculate profit.");    
    }
     
    let minPrice=stocks[0]
    let maxProfit=0

    for(i=1;i<stocks.length;i++){
        let currentPrice=stocks[i]
        let potentianProfit=currentPrice-minPrice
        minPrice=Math.min(minPrice,currentPrice)
        maxProfit=Math.max(potentianProfit,maxProfit)
    }
    
    return maxProfit
  }
  



  function chunk(array,size){
    const chunked=[]
    let index=0
    while(index<array.length){
        const chunk = array.slice(index,index+size)
        chunked.push(chunk)
        index=index+size
    }
    return chunked
  }

  function twoSum(list,target){
    for(i=0;i<list.length;i++){
        for(j=0;j<list.length;j++){
            if(list[i]!=list[j]){
                console.log("TARGET",list[i]+list[j])
                if(list[i]+list[j]==target){
                    return `[${j},${i}]`
                }

            }
        }
    }
  }



let arrayChunkData=[
    2, 7, 11, 15
]



console.log(twoSum(arrayChunkData,9))

// 8, 7, 2, 5, 3, 1


// 8 |  7, 2, 5, 3, 1

// 7 / 8, 2, 5, 3, 1