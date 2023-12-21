const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements and update the visualization
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        updateVisualization(arr);
        swapped = true;

        // Add a delay for visualization
        await delay(100);
      }
    }
  } while (swapped);

  return arr;
}

function updateVisualization(arr) {
  const visualization = document.getElementById("visualization");
  visualization.innerHTML = "";

  arr.forEach((value) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${value * 10}px`;
    visualization.appendChild(bar);
  });
}

function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() *30) + 1); // Generate random values between 1 and 30
  }
  return arr;
}

async function startSorting() {
  const size = 15; // Change this to control the size of the array
  const arr = generateRandomArray(size);

  // Start sorting and visualize it
  await bubbleSort(arr);
}

startSorting(); // Automatically start sorting when the page loads
