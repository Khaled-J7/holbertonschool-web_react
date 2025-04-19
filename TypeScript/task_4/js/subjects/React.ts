namespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (!this.Teacher || this.Teacher.experienceTeachingReact === undefined || this.Teacher.experienceTeachingReact <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.Teacher.firstName}`;
    }
  }
}
