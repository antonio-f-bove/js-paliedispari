// La parola è palindroma ???

const word = prompt('Inserisci una parola');

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


if (isPalindrome(word)) {
  console.log('La parola inserita è palindroma');
} else {
  console.log('La parola inserita NON è palindroma');
}