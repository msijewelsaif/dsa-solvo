let arr = [];
let size = 0;

function inputArraySize() {
    size = parseInt(document.getElementById("size").value);
    document.getElementById("inputElements").style.display = "block";
}

function inputArrayElements() {
    const elementsInput = document.getElementById("elements").value;
    arr = elementsInput.split(",").map(element => parseInt(element.trim()));
    displayArrayWithIndex();
    document.getElementById("output").style.display = "block";
}

function displayArrayWithIndex() {
    const arrayDisplay = document.getElementById("arrayDisplay");
    let displayHtml = "Array:<br>";

    for (let i = 0; i < arr.length; i++) {
        displayHtml += `<span>Index ${i}:</span> ${arr[i]}<br>`;
    }

    arrayDisplay.innerHTML = displayHtml;
}

function insertElement() {
    const insertIndex = parseInt(document.getElementById("insertIndex").value);
    const insertValue = parseInt(document.getElementById("insertValue").value);

    if (insertIndex < 0 || insertIndex > size) {
        alert("Insertion not possible. Invalid index.");
        return;
    }

    arr.splice(insertIndex, 0, insertValue);
    size++;
    displayArrayWithIndex();
}

function deleteElement() {
    const deleteIndex = parseInt(document.getElementById("deleteIndex").value);

    if (deleteIndex < 0 || deleteIndex >= size) {
        alert("Deletion not possible. Invalid index.");
        return;
    }

    arr.splice(deleteIndex, 1);
    size--;
    displayArrayWithIndex();
}

function updateElement() {
    const updateIndex = parseInt(document.getElementById("updateIndex").value);
    const updateValue = parseInt(document.getElementById("updateValue").value);

    if (updateIndex < 0 || updateIndex >= size) {
        alert("Update not possible. Invalid index.");
        return;
    }

    arr[updateIndex] = updateValue;
    displayArrayWithIndex();
}
