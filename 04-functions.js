function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log(greetUser("Kamila"));

function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 8));

const calculateAreaArrow = (width, height) => width * height;

console.log(calculateAreaArrow(5, 8));

function testScope() {
  const localMessage = "Hello from inside the function";
  console.log(localMessage);
}

testScope();

function power(base, exponent = 2) {
  return base ** exponent;
}

console.log(power(4));
console.log(power(4, 3));
