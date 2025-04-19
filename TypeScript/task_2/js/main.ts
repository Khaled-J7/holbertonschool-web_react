// Director interface with required methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface with required methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Factory function that returns either Director or Teacher
function createEmployee(salary: number | string): Director | Teacher {
  // Convert string salary to number if needed
  const numericSalary = typeof salary === 'string' 
    ? parseInt(salary.replace(/\D/g, '')) 
    : salary;
  
  // Return Teacher for salaries less than 500, Director otherwise
  if (numericSalary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test the createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


// Type predicate function to check if an employee is a Director
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function that executes work based on employee type
function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    // TypeScript knows employee is Director here
    return employee.workDirectorTasks();
  } else {
    // TypeScript knows employee is Teacher here
    return employee.workTeacherTasks();
  }
}

console.log(executeWork(createEmployee(200)));     //  Getting to work
console.log(executeWork(createEmployee(1000)));    //  Getting to director tasks


// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function that returns string based on subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Tests
console.log(teachClass('Math'));      // Teaching Math
console.log(teachClass('History'));   // Teaching History
