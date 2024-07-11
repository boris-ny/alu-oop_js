class Residence {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.occupied = false;
  }

  getDetails() {
    return `${this.name}, located at ${this.address}. Occupied: ${this.occupied}`;
  }

  isOccupied() {
    return this.occupied;
  }
}

class DormRoom extends Residence {
  constructor(name, address, size) {
    super(name, address);
    this.size = size;
  }

  calculateRent() {
    return this.size * 10; // Example rent calculation based on size
  }
}

class Apartment extends Residence {
  constructor(name, address, numberOfBedrooms) {
    super(name, address);
    this.numberOfBedrooms = numberOfBedrooms;
  }

  calculateRent() {
    return this.numberOfBedrooms * 300; // Example rent calculation based on number of bedrooms
  }
}

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
