namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.Teacher || this.Teacher.experienceTeachingC === undefined || this.Teacher.experienceTeachingC <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.Teacher.firstName}`;
    }
  }
}
