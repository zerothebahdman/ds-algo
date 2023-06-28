class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// A stack is LIFO (last in first out) and a queue is FIFO (first in first out). Use a stack when you want to add and remove elements from the top of the stack.
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    // console.log(this);
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    console.log(this);
    return this;
  }
  isEmpty() {}
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
