//create an array of strings (has to be of at least length 10)
let myArray = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

// print out the second element in the array
console.log(myArray[1]);

// print out the length of the array
console.log(myArray.length);

//4 iterate over the array and print out each element
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//create a function that takes in a string and in the function iterate over each element in the array and for each element check if its equal to the parameter
function findElement(str) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === str) {
      return myArray[i];
    }
  }
}

//remove the last element from the array and then console.log the array
myArray.pop();
console.log(myArray);

//remove the last element from the array and then console.log the array
myArray.pop();
console.log(myArray);

//remove the first element from the array and then console.log the array
myArray.shift();
console.log(myArray);

//remove the first element from the array and then console.log the array
myArray.shift();
console.log(myArray);

//add a string to the end of the array and then console.log the array
myArray.push("mango");
console.log(myArray);

//add a string to the end of the array and then console.log the array
myArray.push("nectarine");
console.log(myArray);

// add a string to the beginning of the array and then console.log the array
myArray.unshift("orange");
console.log(myArray);

//add a string to the beginning of the array and then console.log the array
myArray.unshift("pear");
console.log(myArray);

//create another array of 6 veggies 
let veggiesArray = ["carrot", "broccoli", "cucumber", "eggplant", "fennel", "garlic"];

//create a variable called twoVeggies and set it equal to slicing the veggies array and getting the middle two elements
let twoVeggies = veggiesArray.slice(2, 4);
console.log(twoVeggies); // Output: ["cucumber", "eggplant"]

//create another array of 4 fruits
let fruitsArray = ["peach", "plum", "raspberry", "strawberry"];

//create a fruits and veggies array and assign it to concatenating the veggies array above and the fruits array
let fruitsAndVeggiesArray = veggiesArray.concat(fruitsArray);
console.log(fruitsAndVeggiesArray);

//get the index of one the fruits or veggies in your fruitsAndveggies array
console.log(fruitsAndVeggiesArray.indexOf("broccoli")); 
