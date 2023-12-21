function collectArray() {
    const numElementsInput = document.getElementById("numElements");
    const numElements = parseInt(numElementsInput.value);

    if (!isNaN(numElements) && numElements > 0) {
        const arrayInputsDiv = document.getElementById("arrayInputs");
        arrayInputsDiv.innerHTML = ""; // Clear previous inputs

        for (let i = 0; i < numElements; i++) {
            const inputField = document.createElement("input");
            inputField.type = "number";
            inputField.placeholder = "Enter element " + (i + 1);
            arrayInputsDiv.appendChild(inputField);
        }

        const submitButton = document.createElement("button");
        submitButton.textContent = "Display Array";
        submitButton.onclick = displayArray;
        arrayInputsDiv.appendChild(submitButton);
    } else {
        alert("Please enter a valid number of elements.");
    }
}

function displayArray() {
    const arrayInputs = document.querySelectorAll("#arrayInputs input");
    const resultDiv = document.getElementById("result");
    const array = [];

    for (const inputField of arrayInputs) {
        const value = parseInt(inputField.value);
        if (!isNaN(value)) {
            array.push(value);
        }
    }

    resultDiv.textContent = "Array elements: " + array.join(", ");
}
