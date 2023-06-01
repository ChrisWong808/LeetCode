class MedianFinder {
  constructor() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
  }

  addNum(num) {
    if (this.maxHeap.size() === 0 || num < this.maxHeap.peek()) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    // Balance the heaps to ensure the size difference is at most 1
    if (this.maxHeap.size() - this.minHeap.size() > 1) {
      this.minHeap.insert(this.maxHeap.extract());
    } else if (this.minHeap.size() - this.maxHeap.size() > 1) {
      this.maxHeap.insert(this.minHeap.extract());
    }
  }

  findMedian() {
    if (this.maxHeap.size() === this.minHeap.size()) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    } else {
      return this.minHeap.peek();
    }
  }
}

// Helper class for Max Heap
class MaxHeap {
  constructor() {
    this.values = [];
  }

  size() {
    return this.values.length;
  }

  peek() {
    return this.values[0];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  extract() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown(0);
    }

    return max;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let maxIndex = index;

    if (
      leftChildIndex < this.values.length &&
      this.values[leftChildIndex] > this.values[maxIndex]
    ) {
      maxIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.values.length &&
      this.values[rightChildIndex] > this.values[maxIndex]
    ) {
      maxIndex = rightChildIndex;
    }

    if (maxIndex !== index) {
      [this.values[maxIndex], this.values[index]] = [
        this.values[index],
        this.values[maxIndex],
      ];
      this.bubbleDown(maxIndex);
    }
  }
}

// Helper class for Min Heap
class MinHeap {
  constructor() {
    this.values = [];
  }

  size() {
    return this.values.length;
  }

  peek() {
    return this.values[0];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  extract() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown(0);
    }

    return min;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (this.values[parentIndex] > this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let minIndex = index;

    if (
      leftChildIndex < this.values.length &&
      this.values[leftChildIndex] < this.values[minIndex]
    ) {
      minIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.values.length &&
      this.values[rightChildIndex] < this.values[minIndex]
    ) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== index) {
      [this.values[minIndex], this.values[index]] = [
        this.values[index],
        this.values[minIndex],
      ];
      this.bubbleDown(minIndex);
    }
  }
}
