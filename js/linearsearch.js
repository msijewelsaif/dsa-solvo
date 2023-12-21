let numbers = [];

// JavaScript code for creating an array based on user input
function createArray() {
  const arrayInput = document.getElementById("arrayInput").value;
  numbers = arrayInput.split(',').map(Number);
  document.getElementById("arrayInput").value = '';
  document.getElementById("result").textContent = 'Array created: [' + numbers.join(', ') + ']';
}

// JavaScript code for linear search
function linearSearch() {
  const searchValue = parseInt(document.getElementById("searchInput").value);

  let found = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchValue) {
      found = true;
      document.getElementById("result").textContent = `${searchValue} is found at index ${i} in the array.`;
      break;
    }
  }

  if (!found) {
    document.getElementById("result").textContent = `${searchValue} is not found in the array.`;
  }
}
