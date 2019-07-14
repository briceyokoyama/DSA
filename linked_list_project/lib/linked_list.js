// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
      if (!this.head) {
        this.head = new Node(val);
        this.tail = this.head;
      } else {
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
      }
      this.length++;
      return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
      if (!this.head) {
        return undefined;
      }

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
      } else {
        let currNode = this.head;

        while (currNode.next !== this.tail) {
          currNode = currNode.next;
        }
        var removed = currNode.next
        currNode.next = null;
        this.tail = currNode;
        this.length--;
      }
      return removed;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
      if (!this.head) {
        this.head = new Node(val);
        this.tail = this.head;
      } else {
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
      }
      this.length++;
      return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
      if (!this.head) {
        return undefined;
      }

      var removed;

      if (this.head === this.tail) {
        removed = this.head;
        this.head = null;
        this.tail = null;
      } else {
        removed = this.head
        this.head = this.head.next;
      }
      this.length--;
      return removed;
    }

    // TODO: Implement the contains method here
    contains(target) {
      if (!this.head) return false;
      let currNode = this.head;

      while (currNode) {
        if (currNode.value === target) return true;
        currNode = currNode.next;
      }
      return false;
    }

    // TODO: Implement the get method here
    get(index) {
      if (!this.head) return null;
      if (this.length - 1 < index) return null;

      let currNode = this.head;

      for (let i = 0; i < index; i++) {
        currNode = currNode.next;
      }
      return currNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
      if (!this.head) return false;
      if (this.length - 1 < index) return false;

      let currNode = this.head;

      for (let i = 0; i < index; i++) {
        currNode = currNode.next;
      }
      currNode.value = val;
      return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
      if (!this.head) return false;
      if (this.length - 1 < index) return false;

      let currNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currNode = currNode.next;
      }

      let temp = currNode.next;
      currNode.next = new Node(val);
      currNode.next.next = temp;
      this.length++;
      return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
      if (!this.head) return false;
      if (this.length - 1 < index) return undefined;

      let currNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currNode = currNode.next;
      }

      let removed = currNode.next;
      currNode.next = removed.next
      this.length--;
      return removed;
    }

    // TODO: Implement the size method here
    size() {
      return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
