type Generic<T> = Array<T>;

const user1: Generic<number> = [1, 2, 3, 4, 5, 6];
const user2: Generic<string> = ["nahid", "nisi", "nipu", "ismail"];

type useType<y, z> = [y, z];

const use1: useType<number, number> = [5, 4];
const use2: useType<string, number> = ["5", 4];
const use3: useType<number, string> = [5, "4"];

const people: Generic<{ name: string; age: number; city: string }> = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "London" },
  { name: "Charlie", age: 22, city: "Paris" },
  { name: "Diana", age: 28, city: "Tokyo" },
  { name: "Ethan", age: 35, city: "Sydney" },
];
