  class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.slice().reverse().join(" --> "));
  }
}

const stack1 = new Stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.print();
console.log(stack1.peek());
console.log(stack1.isEmpty());
console.log(stack1.pop());
console.log(stack1.pop());

stack1.push(70);
stack1.push(80);
stack1.print();


console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.peek());
stack1.push(70);
stack1.print();
//output
/*
40 --> 30 --> 20 --> 10
40
false
40
30
80 --> 70 --> 20 --> 10
80
70
20
10
undefined
70
*/