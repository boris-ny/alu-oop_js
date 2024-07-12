// create a class called Residence
class Residence {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.occupied = false;
  }
  // create a method called getDetails that returns a string with the name, address, and occupied status of the residence
  getDetails() {
    return `${this.name}, located at ${this.address}. Occupied: ${this.occupied}`;
  }
  // create a method called isOccupied that returns the occupied status of the residence
  isOccupied() {
    return this.occupied;
  }
}

// create a class called DormRoom that extends Residence
class DormRoom extends Residence {
  constructor(name, address, size) {
    super(name, address);
    this.size = size;
  }

  calculateRent() {
    return this.size * 10;
  }
}

// create a class called Apartment that extends Residence
class Apartment extends Residence {
  constructor(name, address, numberOfBedrooms) {
    super(name, address);
    this.numberOfBedrooms = numberOfBedrooms;
  }
  // create a method called calculateRent that returns the rent for the apartment
  calculateRent() {
    return this.numberOfBedrooms * 300;
  }
}

// create a class called Student
class Student {
  constructor(name, studentID, gender) {
    this.name = name;
    this.studentID = studentID;
    this.gender = gender;
    this.residence = null;
  }
  // create a method called assignResidence that assigns a residence to the student
  assignResidence(residence) {
    if (!residence.isOccupied()) {
      this.residence = residence;
      residence.occupied = true;
    } else {
      console.log('Residence is already occupied.');
    }
  }
}

// create a class called MaintenanceRequest
class MaintenanceRequest {
  constructor(description, submittedBy) {
    this.description = description;
    this.status = 'submitted';
    this.submittedBy = submittedBy;
    this.assignedTo = null;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }

  assignEmployee(employee) {
    this.assignedTo = employee;
  }
}

// Create some residences
const dorm1 = new DormRoom('Dorm A', '123 Dorm St', 200);
const apt1 = new Apartment('Apt 1', '456 Apartment Rd', 3);

// Create some students
const student1 = new Student('Alice', 'S12345', 'Female');
const student2 = new Student('Bob', 'S67890', 'Male');

// Assign residences to students
student1.assignResidence(dorm1);
student2.assignResidence(apt1);

console.log(student1);
console.log(student2);

// Create and manage maintenance requests
const request1 = new MaintenanceRequest('Fix the heater', student1);
request1.updateStatus('in progress');
request1.assignEmployee('John the maintenance guy');

console.log(request1);
