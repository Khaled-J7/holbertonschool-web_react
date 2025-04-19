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
