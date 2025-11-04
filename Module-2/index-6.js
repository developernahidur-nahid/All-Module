// // ✅ Input
// const postsArray = [
//   { id: "p-101", title: "Intro to SQL", author: "Alex" },
//   { id: "p-102", title: "Data Structures in JS", author: "Beth" },
//   { id: "p-103", title: "Understanding Reduce", author: "Chris" },
//   { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
// ];

// // ✅ Convert array to lookup table using reduce
// const lookupTable = postsArray.reduce((table, post) => {
//   table[post.id] = post;
//   return table;
// }, {});

// // console.log(lookupTable);

// /*
// ✅ Output:
// {
//   "p-101": { id: "p-101", title: "Intro to SQL", author: "Alex" },
//   "p-102": { id: "p-102", title: "Data Structures in JS", author: "Beth" },
//   "p-103": { id: "p-103", title: "Understanding Reduce", author: "Chris" },
//   "p-104": { id: "p-104", title: "CSS Grid Tricks", author: "Alex" }
// }
// */

// // ✅ Traditional way (Find one item)
// // const post = postsArray.find((post) => post.id === "p-103");

// // ✅ Faster lookup using table
// const post = lookupTable["p-103"];
// console.log("Post with ID p-103:", post);

// // ✅ Print all posts
// for (let id in lookupTable) {
//   console.log(lookupTable[id]);
// }



const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];


const postData = postsArray.reduce((table, post) => {
    table[post.id]=post;
    return table;
},{});

console.log(postData);
console.log(postData["p-102"]);
for (let i in postData){
  console.log(postData[i]);
};