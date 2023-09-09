class Queues {
    constructor() {
        this.data = [];
    }
}

Queues.prototype.enqueue = function (element) {
    this.data.push(element);
};

// remove an element from the front of the queue
Queues.prototype.dequeue = function () {
    return this.data.shift();
};

// check if the queue is empty
Queues.prototype.isEmpty = function () {
    return this.data.length == 0;
};
