// @ts-ignore

// entre parenthèse les parametres//
function favoriteAnimal(animal) {
  return animal + " is my favourite animal. ";
}

const message = favoriteAnimal("Dog");
console.log(message);
var myNumber = Math.random();
// la fonction random() génère un nombre aléatoire
// entre 0 et 1, et renvoie
// ce nombre
console.log(myNumber);

var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" ");
console.log(madeAString);
// La fonction join() sélectionne un tableau, rassemble
// tous les éléments du tableau dans une chaîne,
// et renvoie cette nouvelle chaîne.
const monTexte = "Il fait froid";
const nouveauTexte = monTexte.replace("froid", "chaud");
console.log(nouveauTexte); // Devrait afficher "Il fait chaud"
// la fonction replace() s'applique aux chaînes de caractères
// et remplace une sous-chaîne par une autre puis retourne
// une nouvelle chaîne avec le remplacement effectué

// @ts-ignore
function add7(number) {
  // @ts-ignore
  const name = number.toUpperCase;
  return number + 7;
}
add7(10);
console.log(add7(10));

// @ts-ignore
function capitalize(string) {
  // charAt retourne le caractère situé à l’index 0, c’est-à-dire le premier caractère.
  //.toUpperCase()S'applique au caractère récupéré par charAt(0).
  //slice(1) retourne la chaîne à partir de l’index 1, donc à partir du deuxième caractère.
  //str.slice(1).toLowerCase()
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));

// Exo4

function lastLetter(letter) {
  return letter.slice(letter.length - 1);
}
console.log("la derniere lettre du mot est : " + lastLetter("abcd"));
