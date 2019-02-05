class Heap {
    constructor(compareFunction) {
        this.compareFunction = compareFunction || function(a, b) {return a - b};
        this.storage = [];
    }

    returnRoot() {
        return this.storage[0];
    }

    push(value) {
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

    pop() {
        var removed = this.storage[0];

        this.storage[0] = this.storage[this.storage.length - 1];
        this.storage.pop();
        if (this.storage.length < 1) {
            removed = removed || null;
            return removed;
        }
        var changeIndex = 0;
        var childIndex1 = 1;
        var childIndex2 = 2;
        var swapIndex, temp;
        while ((compareFunction(this.storage[childIndex1], this.storage[changeIndex]) > 0) || (compareFunction(this.storage[childIndex2], this.storage[changeIndex]) > 0)) {
            if ((compareFunction(this.storage[childIndex1], this.storage[childIndex2]) > 0)  || !this.storage[childIndex2]) {
                swapIndex = childIndex1;
            } else {
                swapIndex = childIndex2;
            }
            temp = this.storage[swapIndex];
            this.storage[swapIndex] = this.storage[changeIndex];
            this.storage[changeIndex] = temp;
            changeIndex = swapIndex;
            childIndex1 = (changeIndex * 2) + 1;
            childIndex2 = (changeIndex * 2) + 2;
        }
        return removed;
    }
}

var compareFunction = compareFunction || function(a, b) {return b - a};


var testHeap = new Heap();

for (var i = 0; i < 50; i++) {
    testHeap.push(Math.floor(Math.random() * 999))
}

console.log(testHeap.storage)

for (var i = 0; i < 51; i++) {
    console.log(testHeap.pop())
    console.log(testHeap.storage)
}

