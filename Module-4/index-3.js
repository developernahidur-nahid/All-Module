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

const Stack1 = new Stack();
console.log(Stack1);

const brecat = (str) => {
  const stack = new Stack();

  const brecatMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty()) {
        return false;
      }

      const expected = brecatMap[char];
      const got = stack.pop();

      console.log("Expected: ", expected, "Got: ", got);

      if (got !== expected) {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

console.log(brecat("({[]})"));
console.log("--------------");
console.log(brecat(")({[]})"));
console.log("--------------");
console.log(brecat("({[]})"));

