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
    

}

//10--20--30--40--50--60

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


let soloNode=new NodeList("aaaaaaaaa")

let list=new LinkedList(node1)

let list2=new LinkedList(soloNode)


    // console.log(list.size())

    // console.log(list.clear())

console.log(list.pop())