const checkNumber = 17;

if (checkNumber % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

const age = 20;

if (age >= 18) {
  console.log("Can vote");
} else {
  console.log("Cannot vote yet");
}

const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

const userAgeValue = 20;
const voteStatus = userAgeValue >= 18 ? "Can vote" : "Cannot vote yet";
console.log(voteStatus);

const temp1 = 25;
const temp2 = "25";

if (temp1 === temp2) {
  console.log("Strictly equal");
} else {
  console.log("Not strictly equal");
}
