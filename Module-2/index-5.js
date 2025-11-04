// const pleyers = [
//   { name: "Jamal Bhuyan", score: 88 },
//   { name: "Shekh Morsalin", score: 81 },
//   { name: "Rakib Hossain", score: 95 },
//   { name: "Topu Barman", score: 91 },
//   { name: "Sohel Rana", score: 72 },
// ];

// const roApiData = pleyers
//   .sort((a, b) => b.score - a.score)
//   .slice(0, 1)
//   .map((item) => {
//     return { Name: item.name };
//   });

// console.log(roApiData);

// // Count subtotal
// const cartItems = [
//   { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
//   { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
//   { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
// ];

// ✅ Correct subtotal calculation
// const subtotal = cartItems.reduce((acc, item) => {
//   return acc + item.price * item.quantity;
// }, 0);

// console.log("Subtotal:", subtotal); // Output: 1500 + (350×2) + 2200 = 4400

// Find best scorer
// const players = [
//   { name: "Jamal Bhuyan", score: 88 },
//   { name: "Shekh Morsalin", score: 81 },
//   { name: "Rakib Hossain", score: 95 },
//   { name: "Topu Barman", score: 91 },
//   { name: "Sohel Rana", score: 72 },
// ];

// ✅ Find player with highest score
// const bestPlayer = players.reduce((max, player) =>
//   player.score > max.score ? player : max
// );

// console.log("Best Player:", bestPlayer.name, "Score:", bestPlayer.score);




const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const scorer = players.reduce((bestPlayer, player) => {
  console.log(bestPlayer, player)
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }
  return player;
}, players[0]);

console.log(scorer);
