let stack = [];
let counter = 0; // To keep track of the index

function pushElement() {
    const elementInput = document.getElementById('element');
    const elementValue = elementInput.value.trim();

    if (elementValue !== '') {
        stack.push(elementValue);
        elementInput.value = '';
        showStack();
    }
}

function popElement() {
    if (stack.length === 0) {
        alert('Underflow!!');
    } else {
        const poppedElement = stack.pop();
        alert(`Popped element at index ${stack.length}: ${poppedElement}`);
        showStack();
    }
}

function showStack() {
    const stackList = document.getElementById('stack-list');
    stackList.innerHTML = '';

    if (stack.length === 0) {
        stackList.innerHTML = '<li>No elements in the stack</li>';
    } else {
        stack.forEach((element, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Index ${index}: ${element}`;
            stackList.appendChild(listItem);
        });
    }
}
