// Importazione di una singola funzione
// import { myFunction } from './functions.js';

import { add } from './functions.js';
import { subtract } from './functions.js';
import { multiply } from './functions.js';
import { divide } from './functions.js';
import { API_KEY } from './functions.js';

console.log(add(2, 3));        // 5
console.log(subtract(10, 4));  // 6
console.log(multiply(3, 3));   // 9
console.log(divide(20, 5));    // 4
console.log(API_KEY);          // "12345"


// Importazione di tutte le funzioni come oggetto
// import * as functions from './functions.js';

import * as math from './functions.js';

// Math dunque è un oggetto (un contenitore) JavaScript normale che contiene
// tutte le funzioni e costanti importate ed ha un nome assegnato da noi. 
// Si sarebbe potuto chiamare pippo, paperino etc.

console.log(math.add(2, 3));        // 5
console.log(math.subtract(10, 4));  // 6
console.log(math.multiply(3, 3));   // 9
console.log(math.divide(20, 5));    // 4
console.log(math.API_KEY);          // "12345"
