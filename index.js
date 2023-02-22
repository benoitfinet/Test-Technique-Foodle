function frequenciesOfWords(sentence, n) {

    //Je commence par séparer tout les mots avec split. Ils se retrouvent dans un array.
    //Exemple : ("aa bb cc dd ee") devient ["aa", "bb", "cc", "ee"]
    const splitWords = sentence.split(" ")

    //J'initialise un objet pour compter la fréquence de chaque mots dans l'array

    let map = {}
    
    for (let i = 0; i < splitWords.length; i++) {
        let item = splitWords[i];
        map[item] = (map[item] + 1) || 1
      }

    //Je créer un array dont les élements sont des paires
    let pairsWords = Object.entries(map)
      
    //Je tri les mots avec fréquence décroissante et par ordre alphabétique

    const sortedWords = pairsWords.sort(function(a, b) {

        //J'utilise le destructuring pour assigner les élements à des variables
        const [wordA, frequencyA] = a;
        const [wordB, frequencyB] = b;
      
        //Je donne les instructions à ma fonction sort pour :

        //Vérifier si la fréquence du 1er mot est plus grand que le 2ème
        //dans ce cas avec le -1 je lui demande de placer "a" avant "b"
        if (frequencyA > frequencyB) {
          return -1;
        }
        //Ici l'inverse
        else if (frequencyA < frequencyB) {
          return 1;
        } else {
          //localeCompare est utilisé pour trier alphabétiquement en cas d'égalité sur la fréquence
          return wordA.localeCompare(wordB);
        }
      });

    //Je retourne le premier element n de la liste
    //.map est utilisé uniquement pour respecter le
    return sortedWords.slice(0, n).map(([word, frequency]) => [word, frequency]);

}

const testSentence = "baz bar foo foo zblah zblah zblah baz toto bar";
const n = 3;
const testOutput = frequenciesOfWords(testSentence, n);
console.log('Attendu : [["zblah", 3], ["bar", 2], ["baz", 2]]')
console.log(testOutput);
