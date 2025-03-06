// const numbers = new Uint8Array (3)

// numbers

// typedef struct sllist {
//     VALUE val;
//     struct sllist* next;
// } 
// sllnode;

// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// const firstPage = new Node ('google.com')
// const secondPage = new Node ('reddit.com')
// const thirdPage = new Node ('amazon.com')

// firstPage.next = secondPage;
// secondPage.next = thirdPage

// google => reddit => amazon => null

class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }


    traverse(){
       let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    find(val) {
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.val === val) return true;
            currentNode = currentNode.next;
        }
        return false;
}
append(val){
    const newNode = new Node (val)
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }
    this.tail.next=newNode 
    this.tail = newNode;
}
}
    

// const firstPage = 
//     new Node('google.com', 
//         new Node ('reddit.com', 
//             new Node ('amazon.com',
//                 new Node ('youtube.com'))))

// const history = new LinkedList()
// history.head = firstPage;

const train = new LinkedList();
train.append ('Engine')
train.append('Freight Car 1')
train.append('Freight Car 2')

struct item{
    int p;
    int q;
    // char foreName[64];
    // char surName[64];
    struct item *next;
};



