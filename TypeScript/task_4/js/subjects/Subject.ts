namespace Subjects {
  export class Subject {
    private teacher!: Teacher;
    
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    get Teacher(): Teacher {
      return this.teacher;
    }
  }
}
