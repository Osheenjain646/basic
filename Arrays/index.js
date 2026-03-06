const Students =[
    {name:"Osheen Jain" , age:20},
    {name:"Anurag Raj" , age:22},
    {name:"Manoj Verma" , age:20}
]

console.log(Students[0].name);
console.log(Students[1].age);
console.log(Students[2].name);

const num=[12,45,33,89,55]

console.log(num.every(n=>n>10));
// every is used to check for every element is satisfying a condition or not 

marks=[65,56,65,31,33,89,23,12,22,45]

console.log(marks.every(mark=>{(mark=>40)}));

// filter 

const num1 =[10,60,30,80]

// use to filter out elements based on condition 
const big = num1.filter(n=>n>50);

console.log(big);

console.log(marks.filter(mark=>mark>=40));

console.log(num1.find(n=> n>20));
// give the first value that satisfy the condition 

console.log(marks.find(mark=> mark>80));

// nested Array 
// flat 
// use to flat the nested array in 1d array

const nestedArray =[1,2,[3,4,5]];

console.log(nestedArray.flat());
// flat the array 

const nestedarray1 = [1,2,[3,4,5,[6,7,8,9]]]

console.log(nestedarray1.flat(2));  // 2 is the level to flat 

const num2=[1,2,3]

num2.forEach(n=>console.log(n))


const num3=[2,4,6]

num3.forEach(n=>console.log(n*2))

const num4 = [1,2,3,4]

console.log(num4.map(n=>n*2));
// map and make new array based on condition 

const details =[
    {name:"Osheen jain" , batch:"2023-2027" , course:"btech cse iot"},
    {name:"Anurag Raj" , batch:"2023-2027" , course:"btech cse iot"},
    {name:"Manoj Verma" , batch:"2023-2027" , course:"btech cse iot"}
]

console.log(details.map(data=>data.name));

// some 

console.log(marks.some(n=>n<40));

// sort 

console.log(nestedArray.flat().sort((a,b)=>a-b));  // ascending 
console.log(nestedArray.flat().sort((a,b)=>b-a)); // descending 







