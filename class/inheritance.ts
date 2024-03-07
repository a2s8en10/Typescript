class person {
  first_name: "";
  last_name: "";
}

class student extends person {
  stander = 0;
  roll = 0;

  add_student(stander, roll, first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.roll = roll;
    this.stander = stander;
  }

  displays_student() {
    console.log(this.first_name);
    console.log(this.last_name);
    console.log(this.roll);
    console.log(this.stander);
  }
}

let a = new student();
a.add_student(12, 24, "Anurag", "sahu");
a.displays_student;

console.log(a);

class Employee extends person {
  department: "";
  emp_id = 0;

  add_student(department, emp_id, first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.emp_id = emp_id;
    this.department = department;
  }

  displays_student() {
    console.log(this.first_name);
    console.log(this.last_name);
    console.log(this.emp_id);
    console.log(this.department);
  }
}

const emp = new Employee();
emp.add_student("admin", 123, "Anurag", "sahu");
emp.displays_student;

console.log(emp);
