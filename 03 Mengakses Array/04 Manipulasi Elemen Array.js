// Manipulasi Elemen Array
// Metode push()
let buahPush = ['Apel', 'Pisang', 'Jeruk'];
buahPush.push('Mangga');
console.log(buahPush); // Output: ['Apel', 'Pisang', 'Jeruk', 'Mangga']

// Metode pop()
let fruitPop = ['Apple', 'Banana', 'Orange'];
let lastFruit = fruitPop.pop();
console.log(lastFruit); // Output: 'Orange'
console.log(fruitPop); // Output: ['Apple', 'Banana']

// Metode unshift()
let fruitUnshift = ['Apple', 'Banana', 'Orange'];
fruitUnshift.unshift('Mango');
console.log(fruitUnshift); // Output: ['Mango', 'Apple', 'Banana', 'Orange']

// metode shift()
let fruitShift = ['Apple', 'Banana', 'Orange'];
let firstFruit = fruitShift.shift();
console.log(firstFruit); //Output: 'Apple'
console.log(fruitShift); // Output: ['Banana', 'Orange']

// Metode splice()
let fruitSplice = ['Apple', 'Banana', 'Orange', 'Mango'];
fruitSplice.splice(2, 1);
console.log(fruitSplice); // Output: ['Apple', 'Banana', 'Mango']
fruitSplice.splice(0, 1, 'Strawberry');
console.log(fruitSplice); // Output: ['Strawberry', 'Banana', 'Mango']
fruitSplice.splice(2, 0, 'Pineapple');
console.log(fruitSplice); // Output: ['Strawberry', 'Banana', 'Pineapple', 'Mango']

// Metode slice()
let fruitSlice = ['Apple', 'Banana', 'Orange', 'Mango'];
let slicedFruits = fruitSlice.slice(1, 3);
console.log(slicedFruits); // Output: ['Banana', 'Orange']

// Metode concat()
let fruits1 = ['Apple', 'Banana'];
let fruits2 = ['Orange', 'Mango'];
let combinedFruits = fruits1.concat(fruits2);
console.log(combinedFruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango']

// Metode reverse()
let fruitsReverse = ['Apple', 'Banana', 'Orange', 'Mango'];
fruitsReverse.reverse();
console.log(fruitsReverse); // Output: ['Mango', 'Orange', 'Banana', 'Apple']

// Metode sort()
let fruitsSort = ['Banana', 'Apple', 'Orange', 'Mango'];
fruitsSort.sort();
console.log(fruitsSort); // Output: ['Apple', 'Banana', 'Mango', 'Orange'];

// Metode join()
let fruitsJoin = ['Apple', 'Banana', 'Orange', 'Mango'];
let joinedString = fruitsJoin.join(', ');
console.log(joinedString); // Output: 'Apple, Banana, Orange, Mango'

// Properti Length
let fruitsLength = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log(fruitsLength.length); // Output: 4