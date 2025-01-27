
class MyArray{
     constructor(){
        this.length=0
        this.data={}
     }

     push(item){
        this.data[this.length]=item
        this.length++
        return this.length
     }

     get(index){
        if(index<=this.length){ 
            return this.data[index]
        }
        return "Index bigger than data length"
     }

     pop(){
        const lastItem=this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
     }

     shift(){
        for(let i=0;i<this.length;i++){
            this.data[i]=this.data[i +1]
        }
        delete this.data[this.length-1]
     }

     delete(index){

        if(index<=this.length){ 

            delete this.data[index]

            for(let i=index;i<this.length;i++){
                this.data[i]=this.data[i+1]
            }

            delete this.data[this.length-1]


        }
        return "Index bigger than data length"




     }
}


const myNewArray= new MyArray();
myNewArray.push('apple')
myNewArray.push('mango')
myNewArray.push('orange')
myNewArray.push('avocado')


// myNewArray.pop()
// console.log(myNewArray)
// myNewArray.shift()
console.log(myNewArray)
myNewArray.delete(0)
console.log(myNewArray)





