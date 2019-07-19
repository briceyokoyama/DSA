// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
      this.value = val;
      this.next = null;
    }

}

class Stack {
    // TODO: Implement the Stack class!
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(node) {
    
    if (!this.top) {
      this.top = node;
      this.bottom = node;
      return ++this.length;
    }
    node.next = this.top;
    this.top = node;
    return ++this.length;

  }

  pop() {
    if (!this.top) {
      return null;
    }

    var removed;
    if (this.top === this.bottom) {
      removed = this.top;
      this.top = null;
      this.bottom = null;
      this.length--;
      return removed;
    }

    removed = this.top;
    this.top = this.top.next;
    this.length--;
    return removed;
  }

  size() {
    return this.length;
  }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const node = new Node(val);

    if (!this.front) {
      this.inStack.push(node);
      this.front = node;
      this.back = node;
      return this.size();
    }

    if (this.front === this.back) {
      this.inStack.push(node);
      this.front.next = node;
      this.back = node;
      return this.size();
    }

    this.inStack.push(node);
    this.back = node;

    return this.size();

  }

  dequeue() {
    if (!this.front) {
      return null;
    }


    if (this.outStack.size() === 0) {
      while(this.inStack.size()) {
        this.outStack.push(this.inStack.pop());
      }
    }

    var removed;

    if (this.front === this.back) {
      removed = this.outStack.pop();
      this.front = null;
      this.back = null;
      return removed;
    }

    removed = this.outStack.pop();
    this.front = this.front.next;
    return removed;

  }

  size() {
    return this.inStack.size() + this.outStack.size();
  }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
