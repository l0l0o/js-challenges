// Objectif :
// Tu as deux tableaux de nombres représentant les scores d'examen de deux classes différentes. Utilise le spread operator pour fusionner ces deux tableaux en un seul, puis trie les scores dans l'ordre croissant.

// Instructions :
// Crée deux tableaux class1Scores et class2Scores contenant des nombres (scores).
// Utilise le spread operator pour fusionner les deux tableaux en un seul.
// Trie les scores dans l'ordre croissant et affiche le tableau trié.


const class1Scores = [89, 76, 91, 66, 88];
const class2Scores = [72, 95, 84, 80, 78];

// Fusionner les tableaux avec le spread operator
const allScores = [...class1Scores, ...class2Scores];
console.log("🚀 ~ allScores:", allScores)

// Trier les scores dans l'ordre croissant
const sortedScores = allScores.sort();


console.log('Scores triés :', sortedScores); // Affiche les scores triés

// Scores triés : [66, 72, 76, 78, 80, 84, 88, 89, 91, 95]