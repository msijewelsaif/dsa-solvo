let numbers = [];

// JavaScript code for creating an array based on user input
function createArray() {
  const arrayInput = document.getElementById("arrayInput").value;
  numbers = arrayInput.split(',').map(Number);
  numbers.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("arrayInput").value = '';
  document.getElementById("sortedArray").textContent = 'Sorted Array: [' + numbers.join(', ') + ']';
  document.getElementById("result").textContent = '';
}

// JavaScript code for binary search
function binarySearch() {
  const searchValue = parseInt(document.getElementById("searchInput").value);

  let left = 0;
  let right = numbers.length - 1;
  let found = false;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] === searchValue) {
      found = true;
      break;
    } else if (numbers[mid] < searchValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (found) {
    document.getElementById("result").textContent = `${searchValue} is found in the array.`;
  } else {
    document.getElementById("result").textContent = `${searchValue} is not found in the array.`;
  }
}
