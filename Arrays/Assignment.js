// Assignment 

const students = [
    { name: "Osheen Jain", marks: 85, subject: "Math" },
    { name: "Anurag Raj", marks: 35, subject: "Science" },
    { name: "Manoj Verma", marks: 72, subject: "Math" },
    { name: "Priya Sharma", marks: 28, subject: "English" },
    { name: "Rahul Kumar", marks: 55, subject: "Science" },
    { name: "Sneha Singh", marks: 90, subject: "English" },
    { name: "Amit Patel", marks: 42, subject: "Math" },
    { name: "Komal Gupta", marks: 38, subject: "Science" },
    { name: "Vikram Singh", marks: 67, subject: "English" },
    { name: "Neha Reddy", marks: 78, subject: "Math" }
];

const passing_mark = 40;

// 1. Passing Students 
const passStudents = students.filter(student => student.marks >= passing_mark);
console.log("Pass Students:", passStudents);

// 2. failed students 
const failStudents = students.filter(student => student.marks < passing_mark);
console.log("Fail Students:", failStudents);

// 3. Average Marks
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);

// 4. Find Topper 
const topper = students.reduce((topStudent, student) => 
    student.marks > topStudent.marks ? student : topStudent
);
console.log("Topper:", topper);

// 5. Group by Subject
const subjects = [...new Set(students.map(student => student.subject))];
const groupedBySubject = subjects.reduce((group, subject) => {
    group[subject] = students.filter(student => student.subject === subject);
    return group;
}, {});
console.log("Grouped by Subject:", groupedBySubject);


