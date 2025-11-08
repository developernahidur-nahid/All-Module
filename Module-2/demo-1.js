const students = [
  { id: 1, name: "Nahid", marks: [80, 85, 90], age: 19 },
  { id: 2, name: "Ayesha", marks: [70, 75, 78], age: 18 },
  { id: 3, name: "Rafi", marks: [90, 95, 92], age: 20 },
  { id: 4, name: "Sadia", marks: [60, 65, 70], age: 17 },
  { id: 5, name: "Imran", marks: [88, 84, 86], age: 19 },
];

const avgMarks = (student) =>
  student.marks.reduce((a, b) => a + b, 0) / student.marks.length;

const filtered = students.filter((s) => avgMarks(s) >= 80);
const sorted = [...filtered].sort((a, b) => avgMarks(b) - avgMarks(a));
const sliced = sorted.slice(0, 3);
const names = sliced.map((s) => s.name.toUpperCase());
const nestedMarks = students.map((s) => s.marks);
const flatMarks = nestedMarks.flat(Infinity);
const uniqueMarks = [...new Set(flatMarks)];
const arrFromSet = Array.from(uniqueMarks);
const totalMarks = flatMarks.reduce((sum, val) => sum + val, 0);

function showData(data) {
  console.log("Final Processed Data:", data);
}

showData({
  topStudents: names,
  totalMarks,
  uniqueMarks: arrFromSet,
});

//output
/*
Final Processed Data: {
  topStudents: [ 'RAFI', 'IMRAN', 'NAHID' ],
  totalMarks: 1208,
  uniqueMarks: [
    80, 85, 90, 70, 75, 78,
    95, 92, 60, 65, 88, 84,
    86
  ]
}
*/  
