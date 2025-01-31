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

}



let node1=new NodeList(10)
let node2=new NodeList(20)
let node3=new NodeList(30)
let node4=new NodeList(40)
let node5=new NodeList(50)
let node6=new NodeList(50)


node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6


let list=new LinkedList(node1)

console.log(list.size())