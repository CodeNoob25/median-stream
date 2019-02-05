var MedianStream = function () {
    this.lowHeap = [];
    this.highHeap = [];
    this.median = null;
  };
  
  MedianStream.prototype = {
    insert: function (value) {
    
      if (!this.median) {
          this.content.push(value);
      } else if (this.median ) {
          
      }
    },
    peekMedian: function () {
      return this.median;
    },
    size: function () {
      return this.content.length
    }
  };