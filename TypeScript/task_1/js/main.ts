// Define the Teacher interface according to the requirements
interface Teacher {
  readonly firstName: string;  // Can only be set during initialization
  readonly lastName: string;   // Can only be set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // Optional property
  location: string;
  [propName: string]: any;     // Index signature for additional properties
}

// Create teacher objects using the Teacher interface
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'London',
  contract: true  // Additional property allowed by the index signature
};

// Example from Task 1
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example from Task 2
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Additional example showing optional properties
const director2: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: false,
  numberOfReports: 5,
  contract: true  // Additional property from the index signature
};

console.log(director2);

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};