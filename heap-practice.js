class Heap {
    constructor(compareFunction) {
        this.compareFunction = compareFunction || function(a, b) {return a - b};
        this.storage = [];
    }


    insert(value) {
        this.storage.push(value);
        var valueIndex = this.storage.length - 1;
        var parentIndex = Math.floor(this.storage.length / 2);
        console.log(compareFunction(this.storage[valueIndex], this.storage[parentIndex]))
        while (compareFunction(this.storage[valueIndex], this.storage[parentIndex]) > 0) {
            this.storage[valueIndex] = this.storage[parentIndex];
            this.storage[parentIndex] = value;
            valueIndex = parentIndex;
            parentIndex = Math.floor(valueIndex / 2);
        }
    }
}

var compareFunction = compareFunction || function(a, b) {return b - a};


var testHeap = new Heap();

for (var i = 0; i < 10; i++) {
    testHeap.insert(Math.floor(Math.random() * 999))
}

console.log(testHeap.storage)