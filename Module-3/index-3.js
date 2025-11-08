class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.join(" --> "));
  }
}

const queue1 = new Queue();

queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
 queue1.print();
console.log(queue1.peek());
console.log(queue1.isEmpty());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
queue1.print();
queue1.enqueue(70);
queue1.enqueue(80);
queue1.print();

console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.peek());
queue1.enqueue(70);
queue1.print();
//output
/*
10 --> 20 --> 30 --> 40
10
false
10
20
30 --> 40
30 --> 40 --> 70 --> 80
30
40
70
80
undefined
70
*/
  