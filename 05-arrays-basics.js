const colors = ["Red", "Green", "Blue"];

console.log(colors);
console.log(colors[1]);

colors.push("Yellow");
console.log(colors);

const numbers = [2, 4, 6, 8, 10];

for (const num of numbers) {
  console.log(num);
}

let totalSum = 0;
for (const num of numbers) {
  totalSum += num;
}
console.log(totalSum);

const data = [12, 45, 7, 89, 23];
const largestNumber = Math.max(...data);
console.log(largestNumber);

const books = [
  { title: "JavaScript for Beginners", pages: 300 },
  { title: "Clean Code", pages: 464 }
];

console.log(books[1].title);
