// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    this.data.forEach(Numbers => {console.log(Numbers);
      
    });
  }
  odds() {
    //return the odd numbers in data
    let getOdds = [];
  for (let i = 0; i <= this.data.length; i++) {
    if (i % 2 === 1) {
      getOdds.push(i);
    }
  } return getOdds;
  }
  evens() {
    //return the even numbers in data
    let getEvens = [];
  for (let i = 0; i <= this.data.length; i++) {
      if (i % 2 == 0) {
      getEvens.push(i);
      }
    }
    return getEvens;
  }
  sum() {
    //return the sum of the numbers
    const total = this.data.reduce((total, Numbers) => (total + Numbers), 0);
    return(total);
  }
  product() {
    //return the product of the numbers
    const total = this.data.reduce((total, Numbers) => (total * Numbers), 1);
    return(total);
  }
  greaterThan(target) {
    //return the numbers greater than the target
    return this.data.filter((number) => number > target);
  }
  howMany(target) {
    //return the count of a given number
    return this.data.filter((number) => number == target).length;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
