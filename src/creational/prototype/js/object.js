const personPrototype = {
  firstName: 'Lucas',
  lastName: 'Santos',
  age: 25,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson.firstName);
console.log(personPrototype.firstName);
console.log(anotherPerson.fullName());
