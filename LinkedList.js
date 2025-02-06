class NodeList{
    constructor(data){
        this.head=data
        this.next=null
    }
}

class LinkedList{

    constructor(head=null){
        this.head=head
    }

    size(){
       let current=this.head
       let increment=0
       while(current){
        current=current.next
        increment++
       }
       return increment
    }

    clear(){
        this.head=null
    }

    getLast(){
        let current=this.head
        let temp;
        while(current){
            temp=current
            current=current.next
        }

        return temp
    }

    getFirst(){
        return this.head
    }

    pop() {
        if (!this.head) {
            return null; // Empty list
        }
    
        if (!this.head.next) {
            const lastNode = this.head;
            this.head = null; // Clear the list
            return lastNode.head; // Return the data of the removed node
        }
    
        let current = this.head;
        let prev = null;
    
        // Traverse to the second-last node
        while (current.next) {
            prev = current;
            current = current.next;
        }
    
        prev.next = null; // Remove the last node
        return current.head;   // Return the data of the removed node
    }
    unshift(data){ 
        let node=new NodeList(data)
        let current=this.head

        if(current!==null){
            node.next=current
        }

        current=node

        return node;
    }

    shift(){


        if(this.head==null){
            return null
        }

        let removedNode=this.head
        this.head=this.head.next

        return removedNode

    }

    getByIndex(index){
        if(this.head==null || index<0){
            return null
        }
        let i=0
        let current=this.head
        while(current && i<index){
            i++
            current=current.next
        }

        return current;
    }

    setByIndex(index,value){
        if(this.head==null || index<0){
            return null
        }

        let i=0
        let current=this.head 

        while(i<index && current.next){
            i++
            current=current.next
        }

        if(i==index){
            current.head=value
        }
    }

    insertByindex(index,data){

        if(this.head==null || index<0){
            return null 
        }

        let node=new NodeList(data)

        
        if (index === 0) {
            node.next = this.head;
            this.head = node;
            return node;
        }


        let i=0
        let current=this.head 
        let tempNode;

        while(i<index-1 && current.next){
            i++
            current=current.next
        }
        

        if(i==index-1 && current){
        tempNode=current.next
        node.next=tempNode
        current.next=node
        return current
        }

        return null


    }
}


//create new element 
// Find position 
///Insert new node element in N-1 node next 
//Insert into next of N element the next element N+1


// NodeList {
//     head: 10,
//     next: NodeList { head: 20, next: NodeList { head: 30, next: [NodeList] } }
//   }
  
// 10-20-30-40-50


// output : 
// 20-30-40-50

let node1=new NodeList(10)
let node2=new NodeList(20)
let node3=new NodeList(30)
let node4=new NodeList(40)
let node5=new NodeList(50)
let node6=new NodeList(60)

node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6


let list=new LinkedList(node1)

list.insertByindex(0,"*****")

// console.log("Get list by index ",)



console.log("list",list.head)


// console.log(list.size())
// console.log(list.clear())

