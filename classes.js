// Blueprint for an user-defined objects


class Vehicle {

  constructor(type, name, engine) {
    this.type = type;
    this.name = name;
    this.engine = engine;
  }

}

Vehicle.prototype.startEngine = function () {
  console.log('Started engine', this.name);
}

// Inheritence

class TwoWheeler extends Vehicle {


  constructor(type, name, engine, cc = '120cc') { // first apparoach for default value
    super(type, name, engine); // inheritance of the properties from the parent class
    this.cc = cc || '120cc'; // second approach default value for cc
  }


  // static props
  wheels = 2;

}

class FourWheeler extends Vehicle {

  constructor(type, name, engine, cc) {
    super(type, name, engine); // inheritance of the properties from the parent class
    this.cc = cc;
  }

  wheels = 4;

}



const Bike = new TwoWheeler('Bike', 'Honda', 'Combustion', '120cc');

const Baleno = new FourWheeler('Car', 'Baleno', 'Electric Motor', '480cc');

console.log(Bike);

console.log(Baleno);

// E-Commerce Site

// Products ---> Blueprint for Product

class Product {

  constructor(name, description, sellPrice, color) {
    this.name = name;
    this.description = description;
    this.sellPrice = sellPrice;
    this.color = color;
  }

  // Getter --> Function to get the values of a Object
  getter() {
    return {
      name: this.name,
      description: this.description,
      sellPrice: this.sellPrice
    }
  }

  // Setter
  setValues(values) {
    this.name = values.name;
    this.description = values.description;
    this.sellPrice = values.sellPrice;
  }
}

// Electronic products ---> Blueprint for Digital Products
class DigitalProduct extends Product {
  constructor(name, description, sellPrice, color, warranty, brand) {
    super(name, description, sellPrice, color);
    this.warranty = warranty;
    this.brand = brand;
  }
}

const Mobile = new DigitalProduct('Mobile', 'Phone', '100USD', 'Blue', '2yrs', 'Motorola')


console.log(Mobile);
// 
class Wearable extends Product {

  constructor(name, description, sellPrice, color, size, brand) {
    super(name, description, sellPrice, color);
    this.size = size;
    this.brand = brand;
  }

}


