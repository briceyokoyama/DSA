class MaxHeap {
    constructor() {
      this.array = [null];
    }

    getParent(idx) {
      return Math.floor(idx/2);
    }

    getLeftChild(idx) {
      return idx*2;
    }

    getRightChild(idx) {
      return idx*2 + 1;
    }

    siftUp(idx) {
      if (idx === 1) return;

      let parentIdx = this.getParent(idx);

      if (this.array[idx] > this.array[parentIdx]) {
        [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];

        this.siftUp(parentIdx);
      }
    }

    insert(val) {
      this.array.push(val);

      this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
      let leftIdx = this.getLeftChild(idx);
      let rightIdx = this.getRightChild(idx);
      let left = this.array[leftIdx];
      let right = this.array[rightIdx];

      if (left === undefined) left = -Infinity;
      if (right === undefined) right = -Infinity;

      if (this.array[idx] > left && this.array[idx] > right) return;

      if (left < right) {
        var swapIdx = rightIdx;
      } else {
        var swapIdx = leftIdx;
      }

      [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];

      this.siftDown(swapIdx);
    }

    deleteMax() {
      if (this.array.length === 1) return null;
      if (this.array.length === 2) return this.array.pop();

      let temp = this.array[1];

      this.array[1] = this.array.pop();

      this.siftDown(1);

      return temp;
    }
}

module.exports = {
    MaxHeap
};