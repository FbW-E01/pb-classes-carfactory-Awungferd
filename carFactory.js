function Car(make, model, year = 1920) {
  this.type = "car";
  this.make = make;
  this.model = model;
  this.year = year;
}

const garage = [
    new Car("Toyota", "Camry", 1984),
    new Car("Honda", "Civic LX", 2018), 
    new Car("Honda", "Civic Touring", 2000),
    new Car("Honda Civic Sport Touring", "Hatchback", 1998)
];

console.log(garage);
Car();


