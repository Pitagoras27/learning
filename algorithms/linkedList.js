/**
 * Initialize information of Node.
 * `data` of node, for simplicity only one
 * `next` is the reference to the next node
 */
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

/**
 * linkedlist class whit two prop of instance;
 * the head initialice whit value is null and size with value es zero
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Add information to de node of LinkedList
   * @param {number} data contains of node
   */
  add(data) {
    const newNode = new Node(data, null);
    // If head is empty is started linked list
    if (!this.head) {
      this.head = newNode;
      // If not empty the new node should be add at the end of the linked list
    } else {
      let current = this.head;
      // iterates in all elements of current object for set always end of node
      while (current.next) {
        current = current.next;
      }
      // Set new node at the end of the linked list
      current.next = newNode;
    }
    // Update size
    this.size += 1;
  }
  /**
   * Inserts data in specified node
   * @param {number} data for node
   * @param {number} index position to insert
   * @returns
   */
  insertAt(data, index) {
    // Not have insert in negative position and mayor index to size
    if (index < 0 || index > this.size) return null;

    // Pass data to instance of Node
    const newNode = new Node(data);
    console.log("newNode-->", newNode);
    // Get current head store in member of class this
    let current = this.head;
    let previous = null;

    // If insert in first index
    if (index === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      // Iterates through of all nodes of list until find to index and update variables
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    // Finilly increment size of list
    this.size += 1;
  }
}

const linkedList = new LinkedList();

linkedList.add(12);
linkedList.add(99);
linkedList.add(37);
linkedList.add(28);
linkedList.insertAt(16, 3);
console.log(linkedList);
