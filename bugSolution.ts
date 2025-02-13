function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; 
  } else {
    return 0; // or throw an error
  }
}

let result1 = add(1, 2); // Correct
let result2 = addSafe("hello", 2); // String and number handled safely
let result3 = addSafe("hello", "world"); // String and string handled safely
console.log(result1); // Output: 3
console.log(result2); //Output: 0
console.log(result3); //Output: helloworld