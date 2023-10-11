let Phrase = require("mbpalindrome");

let string = prompt("Please enter string for palindrome testing:");
let phrase = new phrase(string);

if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome!`);
} else {
    alert(`"${phrase.content}" is not a palindrome. `)
}
