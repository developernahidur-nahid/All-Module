class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insert(index, value) {
    // যদি ইনডেক্স 0 হয়, প্রথমে যোগ করব
    if (index === 0) {
      this.prepend(value);
      return;
    }

    // যদি ইনডেক্স লিস্টের দৈর্ঘ্যের চেয়ে বেশি হয়, শেষে যোগ করব
    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let previous = this.head;
    let i = 0;

    // ইনডেক্সের আগের নোড পর্যন্ত যাব
    while (i < index - 1) {
      previous = previous.next;
      i++;
    }

    // মাঝখানে নতুন নোড বসাব
    newNode.next = previous.next;
    previous.next = newNode;

    this.length++;
  }

  remove() {}

  print() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(elements.join(" -> ") + " -> null");
  }
}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append(4);
linkedList.append(6);
linkedList.append(8);
linkedList.prepnd(1);

linkedList.print();

//output --> [2 -> 4 -> 6 -> 8 -> null]
