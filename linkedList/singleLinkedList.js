/**
 * Every node in linked list will be object of below node
 */
class Node {
    // Setting next as default as null if nothing is send
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * We will be adding functions as prototype in below class
 */
class SingleLinkedList {
    constructor() {
        this.head = null;
    }
}

/*
 inserting data into linked list has 3 ways
 1. insert at beginning
 2. insert at end
 3. insert at anywhere
*/

// Inserting at beginning
SingleLinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data);
    // taking reference of existing node and giving it reference of next
    newNode.next = this.head;
    this.head = newNode;
};

// Inserting at end
SingleLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    // if head is null meaning we are trying to insert in empty linked list
    if (!this.head) {
        this.head = newNode;
        return;
    }

    let tail = this.head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    tail.next = newNode;
    return;
};

// get node at particular location
SingleLinkedList.prototype.getAt = function (index) {
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
            return node;
        } else {
            counter = counter + 1;
            node = node.next;
        }
    }
    return null;
};

// Insert at particular location
SingleLinkedList.prototype.insertAt = function (data, index) {
    // if the list is empty i.e. head = null
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
    // if new node needs to be inserted at the front of the list i.e. before the head.
    if (index === 0) {
        this.head = new Node(data, this.head);
        return;
    }
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;
};

SingleLinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
    return this.head;
};

SingleLinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return null;
    }
    // if only one node in the list
    if (!this.head.next) {
        this.head = null;
        return;
    }
    let previous = this.head;
    let tail = this.head.next;

    while (tail.next !== null) {
        previous = tail;
        tail = tail.next;
    }

    previous.next = null;
    return this.head;
};

SingleLinkedList.prototype.deleteAt = function (index) {
// when list is empty i.e. head = null
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
// node needs to be deleted from the front of the list i.e. before the head.
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
// else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
        return;
    }

    previous.next = previous.next.next;
    return this.head
};

SingleLinkedList.prototype.deleteList = function () {
    this.head = null;
};

// creating instance of linked list
let list = new SingleLinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtEnd(30);
const element = list.getAt(2);
console.log(JSON.stringify(element));
console.log(JSON.stringify(list));
