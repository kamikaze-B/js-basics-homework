function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

function maxInArray(numbers) {
  if (numbers.length === 0) return null;
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) max = num;
  }
  return max;
}

function countEvens(numbers) {
  let count = 0;
  for (const num of numbers) {
    if (num % 2 === 0) count++;
  }
  return count;
}

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function indexOfElement(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function getPositiveNumbers(numbers) {
  return numbers.filter(num => num > 0);
}

function uniqueValues(arr) {
  const result = [];
  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

function rotateRight(arr, k) {
  if (arr.length === 0) return [];
  const shift = k % arr.length;
  if (shift === 0) return [...arr];
  return [...arr.slice(-shift), ...arr.slice(0, -shift)];
}

function secondLargest(numbers) {
  if (numbers.length < 2) return null;
  let first = -Infinity;
  let second = -Infinity;
  for (const num of numbers) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}

function mergeAndSort(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}

function wordLengths(words) {
  return words.map(word => word.length);
}

function isSortedAscending(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) return false;
  }
  return true;
}

function hasPairWithSum(numbers, target) {
  const seen = new Set();
  for (const num of numbers) {
    const complement = target - num;
    if (seen.has(complement)) return true;
    seen.add(num);
  }
  return false;
}

function flattenOnce(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}

function groupByParity(numbers) {
  const even = [];
  const odd = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return { even, odd };
}
