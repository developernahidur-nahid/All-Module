class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    };
};

const obj1 = new Node(5);

obj1.next = new Node(10);

obj1.next.next = new Node(20);

console.log(obj1);

//Itaretion gotbe
let temp = obj1;

while (temp !== null){
    console.log(temp.value);
    temp = temp.next;
};