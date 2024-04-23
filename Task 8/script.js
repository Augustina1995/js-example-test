/* ------------------------------ TASK 13 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Person" (naudokite ES6), kuri sukuria objektus su šiais duomenimis:
- vardas (string)
- amžius (number)
- lytis (string)

Taip pat, klasė turėtų turėti metodą "introduce", kuris grąžina string, kuriame pateikiami šie duomenys:
"Pavadinimas: [vardas], Amžius: [amžius], Lytis: [lytis]".

Pavyzdinė objekto inicijavimo ir metodo kvietimo seka:
const person1 = new Person('John', 30, 'Vyras');
const introduction = person1.introduce();

Grąžinama reikšmė:
'Pavadinimas: John, Amžius: 30, Lytis: Vyras'
------------------------------------------------------------------------------------ */

// ANSWER

class Person {
    constructor(name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
  
    introduce() {
      return `Pavadinimas: ${this.name}, Amžius: ${this.age}, Lytis: ${this.sex}`;
    }
  }
  

const person1 = new Person('John', 30, 'Vyras');
const introduction = person1.introduce();
console.log(introduction); // Output: 'Pavadinimas: John, Amžius: 30, Lytis: Vyras'
  