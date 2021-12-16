// La parola è palindroma ???

function isPalindrome (string) {
  let palindrome = true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}

const word = prompt('Inserisci una parola');

if (isPalindrome(word)) {
  console.log('La parola inserita è palindroma');
} else {
  console.log('La parola inserita NON è palindroma');
}


// pari e dispari
// includo il numero 0 per evitare che il gioco si impari

function randNum(min, max) {
  const num = Math.floor(Math.random() * (max + 1 - min) + min);
  return num;
}

let pariDispari = '';
do {
  pariDispari = prompt('Pari o dispari ? p/d');
} while (pariDispari !== 'p' && pariDispari !== 'd');

let sum = 0;
do {
  sum = parseInt(prompt('Inserisci un numero tra 0 e 5'));
} while (sum < 0 || sum > 5);

sum += randNum(0, 5);

let winnner = false;
if (pariDispari === 'p' && sum % 2 === 0) {
  winnner = true;
}
if (pariDispari === 'd' && sum % 2 === 1) {
  winnner = true;
}

console.log(`La somma è ${sum}`);
if (winnner) console.log('Hai vinto')
else console.log('Hai perso')