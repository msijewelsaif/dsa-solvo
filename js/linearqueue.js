const queue = new Array(5);
let front = -1;
let rear = -1;

const enqueueButton = document.getElementById("enqueueButton");
const dequeueButton = document.getElementById("dequeueButton");
const inputElement = document.getElementById("inputElement");
const items = document.querySelectorAll(".item");

enqueueButton.addEventListener("click", enqueue);
dequeueButton.addEventListener("click", dequeue);

function isFull() {
    return (rear + 1) % 5 === front;
}

function isEmpty() {
    return front === -1;
}

function enqueue() {
    if (isFull()) {
        alert("Queue is full. Cannot enqueue.");
        return;
    }

    const element = inputElement.value;
    if (element.trim() !== "") {
        if (isEmpty()) {
            front = rear = 0;
        } else {
            rear = (rear + 1) % 5;
        }
        queue[rear] = element;
        updateQueueView();
        inputElement.value = "";
    }
}

function dequeue() {
    if (isEmpty()) {
        alert("Queue is empty. Cannot dequeue.");
        return;
    }

    if (front === rear) {
        front = rear = -1;
    } else {
        front = (front + 1) % 5;
    }
    updateQueueView();
}

function updateQueueView() {
    items.forEach((item, index) => {
        if (index >= front && index <= rear) {
            item.innerText = queue[index];
            item.style.backgroundColor = "#d074d9";
        } else {
            item.innerText = "";
            item.style.backgroundColor = "#f0f0f0";
        }
    });
}
