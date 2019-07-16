// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    let item = new Node(val);
    if (!this.top) {
      this.top = item;
      this.bottom = item;
    } else {
      item.next = this.top;
      this.top = item;
    }
    
    return ++this.length;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      let removed = this.top;
      this.top = null;
      this.bottom = null;
      this.length--;
      return removed.value;
    }

    let removed = this.top;
    this.top = this.top.next;

    this.length--;
    return removed.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
