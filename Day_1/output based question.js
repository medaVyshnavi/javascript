const students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// Return only the name of students in Capital
const studentName = students.map((item) => item.name.toUpperCase());
console.log(studentName, 22);

// Return only the details of students who scored more than 60
const marks = students.filter((student) => student.marks > 60);
console.log(marks, 11);

//Return only the name of students who scored more than 60
const names = students
  .filter((student) => student.marks > 60)
  .map((person) => person.name);
console.log(marks, 11);

//Return only the name of students who scored more than 60 and roll number greater than 15
const toppers = students.filter(
  (student) => student.marks > 60 && student.rollNumber > 15
);
console.log(toppers, 11);

// return the sum of marks of all the students
const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(totalMarks);

// return total marks for students with marks greater than 60 after 20 marks has
// been added to those who scored less than 60.
const incrementMarks = students
  .map((person) => (person.marks < 60 ? person.marks + 20 : person.marks))
  .filter((per) => per > 60)
  .reduce((acc, curr) => acc + curr, 0);

console.log(incrementMarks, 888);
