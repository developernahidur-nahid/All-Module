class Counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount;
  }

  print() {
    console.log(this.count);
  }
}


const obj1 = new Counter(0);
obj1.add(10);
obj1.add(10);
obj1.add(10);
obj1.add(10);

obj1.print();
//output
//40

const obj2 = new Counter(20);
obj2.add(5);
obj2.add(4);
obj2.add(3);
obj2.add(1);

obj2.print(); 
//output
//33