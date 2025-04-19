// Define the Student interface as specified in the task
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 20,
  location: "San Francisco"
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table with student data
function renderTable(): void {
  // Create table element
  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';
  table.style.width = '50%';
  
  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.border = '1px solid black';
  firstNameHeader.style.padding = '8px';
  
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.border = '1px solid black';
  locationHeader.style.padding = '8px';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create table body
  const tbody = document.createElement('tbody');
  
  // Loop through the student list and append a row for each student
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    firstNameCell.style.padding = '8px';
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  
  // Add the table to the document body
  document.body.appendChild(table);
}

// Call the renderTable function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderTable);
