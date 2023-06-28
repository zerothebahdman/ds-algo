class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Queue is FIFO (first in first out). Use a stack when you want to add and remove elements from the top of the stack. Use a queue when you want to add elements to the bottom of the queue and remove elements from the top of the queue.

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(this);
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    console.log(this);
    return this;
  }
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.dequeue();
