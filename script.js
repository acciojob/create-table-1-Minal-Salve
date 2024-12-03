function insert_Row() {
    //Write your code here
    let table = document.getElementById('sampleTable');
      
    // Create a new row element
    let newRow = document.createElement("tr");
    
    // Create two new cell elements
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    
    // Set the content for the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
    
    // Append the cells to the row
    newRow.append(cell1);
    newRow.append(cell2);
    
    // Insert the new row at the top of the table
    table.prepend(newRow);
  
}
