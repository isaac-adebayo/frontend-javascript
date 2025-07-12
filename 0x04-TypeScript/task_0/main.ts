interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'Isaac',
  lastName: 'Adebayo',
  age: 27,
  location: 'Lagos'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'Abuja'
};

// Array containing both students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement('table');

// Create table header
const headerRow: HTMLTableRowElement = document.createElement('tr');
const nameHeader: HTMLTableCellElement = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader: HTMLTableCellElement = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Create a row for each student
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const nameCell: HTMLTableCellElement = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the document body
document.body.appendChild(table);

