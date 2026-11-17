for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(sum);

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i === 15) {
    break;
  }
  console.log(i);
}
