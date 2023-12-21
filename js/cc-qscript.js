// Circular Queue implementation
const MAX_SIZE = 5; // Maximum size of the circular queue
let front = -1;
let rear = -1;
const queue = new Array(MAX_SIZE);

// Function to check if the queue is empty
function isEmpty() {
    return front === -1 && rear === -1;
}

// Function to check if the queue is full
function isFull() {
    return (rear + 1) % MAX_SIZE === front;
}

// Function to enqueue an element into the circular queue
function enqueue(element) {
    if (isFull()) {
        alert("Queue is full. Cannot enqueue.");
        return;
    } else if (isEmpty()) {
        front = rear = 0;
    } else {
        rear = (rear + 1) % MAX_SIZE;
    }
    queue[rear] = element;
}

// Function to dequeue an element from the circular queue
function dequeue() {
    if (isEmpty()) {
        alert("Queue is empty. Cannot dequeue.");
        return;
    } else if (front === rear) {
        alert("Dequeued: " + queue[front]);
        front = rear = -1;
    } else {
        alert("Dequeued: " + queue[front]);
        front = (front + 1) % MAX_SIZE;
    }
}

// Function to update the queue status in the HTML
function updateQueueStatus() {
    const frontElement = document.getElementById('front-element');
    const rearElement = document.getElementById('rear-element');
    const queueElements = document.getElementById('queue-elements');

    if (isEmpty()) {
        frontElement.textContent = "Empty";
        rearElement.textContent = "Empty";
        queueElements.textContent = "Empty";
    } else {
        frontElement.textContent = queue[front];
        rearElement.textContent = queue[rear];
        const elements = [];
        let i = front;
        while (i !== rear) {
            elements.push(queue[i]);
            i = (i + 1) % MAX_SIZE;
        }
        elements.push(queue[rear]);
        queueElements.textContent = elements.join(', ');
    }
}

// Event listener for the enqueue form
const enqueueForm = document.getElementById('enqueue-form');
enqueueForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const elementInput = document.getElementById('element');
    const elementValue = elementInput.value.trim();
    if (elementValue !== '') {
        enqueue(elementValue);
        elementInput.value = '';
        updateQueueStatus();
    }
});

// Event listener for the dequeue form
const dequeueForm = document.getElementById('dequeue-form');
dequeueForm.addEventListener('submit', function (e) {
    e.preventDefault();
    dequeue();
    updateQueueStatus();
});
