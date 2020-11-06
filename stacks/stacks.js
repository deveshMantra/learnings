class Stacks {
    constructor() {
        this.data = [];
        this.top = 0;
    }
}

Stacks.prototype.add = function (data) {
    this.data.push(data);
    this.top = this.top + 1;
};

Stacks.prototype.delete = function () {
    if(!this.isEmpty()){
        this.data.pop();
        this.top = this.top - 1;
    }
};

Stacks.prototype.peek = function () {
    return this.data[this.top - 1]
};

Stacks.prototype.lengthOfStack = function () {
    return this.top;
};

Stacks.prototype.isEmpty = function () {
    return this.top < 1;
};

Stacks.prototype.print = function () {
    let i;
    for (i = 0; i < this.top; i++) {
        console.log(this.data[i])
    }
};

Stacks.prototype.search = function (element) {
    let i;
    for (i = 0; i < this.top; i++) {
        if (element === this.data[i]) {
            break;
        }
    }
    return i;
};
