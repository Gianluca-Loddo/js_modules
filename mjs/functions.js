function add(a, b) {
  const result = a + b;
  return result;
}

function subtract(a, b) {
  const result = a - b;
  return result;
}

function multiply(a, b) {
  const result = a * b;
  return result;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed"); // Crea un errore se si tenta di dividere per zero e appare
  }
  const result = a / b;
  return result;
}

const API_KEY = 'your_api_key_here';

export { add, subtract, multiply, divide, API_KEY }; // Esporta le funzioni e la costante API_KEY


/*
===============================
EXPORT ED IMPORT IN JAVASCRIPT
===============================

🔹 1. EXPORT NOMINATO (named export)
-----------------------------------
👉 Si possono esportare più funzioni/variabili con i loro nomi originali.

Esempio:
---------
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

export { add, subtract };

Importazione:
--------------
import { add, subtract } from './math.js';

console.log(add(2, 3));      // 5
console.log(subtract(5, 2)); // 3

✅ Nota: Si devono usare gli stessi nomi.
❌ Non si può cambiare nome, a meno che non si usi "as":
   import { add as somma } from './math.js';


🔹 2. EXPORT DI DEFAULT (default export)
---------------------------------------
👉 Si può esportare solo una cosa principale dal file.

Esempio:
---------
export default function add(a, b) {
  return a + b;
}

Importazione:
--------------
import qualsiasiNome from './math.js';

console.log(qualsiasiNome(2, 3)); // 5

✅ Nota: Qui si può scegliere liberamente il nome
   (es: somma, calcola, pippo...).


🔹 Differenza in breve
----------------------
- export { ... } → più cose, si devono importare con il loro nome
- export default ... → una sola cosa, si può rinominare liberamente
*/
