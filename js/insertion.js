let arr = [];
let size = 0;

function inputArraySize() {
    size = parseInt(document.getElementById("size").value);
    document.getElementById("inputElements").style.display = "block";
}

function inputArrayElements() {
    const elementsInput = document.getElementById("elements").value;
    arr = elementsInput.split(",").map(element => parseInt(element.trim()));
    displayArray();
    document.getElementById("output").style.display = "block";
}


function displayArray() {
    const arrayDisplay = document.getElementById("arrayDisplay");
    arrayDisplay.innerHTML = "Array: " + arr.join(" ");
}

function insertElement() {
    const insertIndex = parseInt(document.getElementById("insertIndex").value );
    const insertValue = parseInt(document.getElementById("insertValue").value);

    if (insertIndex < 0 || insertIndex > size) {
        alert("Insertion not possible. Invalid index.");
        return;
    }

    arr.splice(insertIndex, 0, insertValue);
    size++;
    displayArray();
}

function deleteElement() {
    const deleteIndex = parseInt(document.getElementById("deleteIndex").value);

    if (deleteIndex < 0 || deleteIndex >= size) {
        alert("Deletion not possible. Invalid index.");
        return;
    }

    arr.splice(deleteIndex, 1);
    size--;
    displayArray();
}
