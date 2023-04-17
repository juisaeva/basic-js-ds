const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.arr = [];
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // const test = [];
    // for(let i = 0; i<this.arr.length; i++) {
    //   // test.push(`{"value":${this.arr[i]},"next":${this.arr[i+1]} }`);
    //   test.push(`{"value":${this.arr[i]},"next":`);
    // }

    // let test2 = test.join('');
    // return test2.replace(/\r?\n/g, "") + 'null' + '}'.repeat(test.length);
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.push(value);
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.shift();
  }
}

module.exports = {
  Queue
};
