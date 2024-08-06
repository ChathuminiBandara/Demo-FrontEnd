document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('studentName').value;
    const id = document.getElementById('studentId').value;
    const address = document.getElementById('studentAddress').value;
    const course = document.getElementById('studentCourse').value;

    // Create a new row and cells
    const tableBody = document.getElementById('studentTableBody');
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    newRow.appendChild(nameCell);

    const idCell = document.createElement('td');
    idCell.textContent = id;
    newRow.appendChild(idCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = address;
    newRow.appendChild(addressCell);

    const courseCell = document.createElement('td');
    courseCell.textContent = course;
    newRow.appendChild(courseCell);

    const actionsCell = document.createElement('td');
    actionsCell.innerHTML = `
        <button class="btn btn-warning btn-sm update-btn">Update</button>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    `;
    newRow.appendChild(actionsCell);

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Clear the form
    document.getElementById('studentForm').reset();

    // Add event listeners for update and delete buttons
    newRow.querySelector('.update-btn').addEventListener('click', () => updateStudent(newRow));
    newRow.querySelector('.delete-btn').addEventListener('click', () => deleteStudent(newRow));
});

function updateStudent(row) {
    // Get current values
    const nameCell = row.children[0];
    const idCell = row.children[1];
    const addressCell = row.children[2];
    const courseCell = row.children[3];

    // Prompt user for new values
    const newName = prompt("Enter new name:", nameCell.textContent);
    const newId = prompt("Enter new ID:", idCell.textContent);
    const newAddress = prompt("Enter new address:", addressCell.textContent);
    const newCourse = prompt("Enter new course:", courseCell.textContent);

    // Update the table row with new values
    if (newName) nameCell.textContent = newName;
    if (newId) idCell.textContent = newId;
    if (newAddress) addressCell.textContent = newAddress;
    if (newCourse) courseCell.textContent = newCourse;
}

function deleteStudent(row) {
    // Confirm deletion
    const confirmDelete = confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
        row.remove();
    }
}



/*New Test Button*/
$('#save-btn'),click(function (){


    let SID  = $('#studentId').val();
    let Sname = $('#studentName').val();
    let Saddress  = $('#studentAddress').val();
    let Scourse  = $('#studentCourse').val();

    $.ajax({
        url : "p",
        method : "",
        contentType : "application/json",
        "data" : JSON.stringify({


        }),
        success:function (success){
            console.log("")
            alert("nicee")
        },
        error:function (error){
            console.log("")
            alert("eeew")
        }
    })


    console.log("button clicked")
})
