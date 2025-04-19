namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!this.Teacher || this.Teacher.experienceTeachingJava === undefined || this.Teacher.experienceTeachingJava <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.Teacher.firstName}`;
    }
  }
}
