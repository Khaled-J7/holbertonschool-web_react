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

// Example from the task
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Log the teacher objects
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);