function insert_Row() {
    // Get the table by its ID
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top of the table
    let newRow = table.insertRow(0);

    // Create two new cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Assign the expected values to the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
