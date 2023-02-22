const frequenciesOfWords = require('./index')

//tests basiques en utilisation normale de la fonction
describe("When I have string as first argument and positive number at second argument", () => {
    test("then it should return the correct response with one word", function () {
        expect(frequenciesOfWords("test", 2)).toStrictEqual([["test", 1]])
    })
    test("then it should return the correct response with more than one word", function () {
        expect(frequenciesOfWords("baz bar foo foo zblah zblah zblah baz toto bar", 3)).toStrictEqual([
            [
                "zblah",
                3
            ],
            [
                "bar",
                2
            ],
            [
                "baz",
                2
            ]
        ]);
    })

    //test limites
    test('should return all words with their frequencies when n is larger than the number of unique words', () => {
        expect(frequenciesOfWords("baz bar foo foo zblah zblah zblah baz toto bar", 100)).toStrictEqual([
            [
                "zblah",
                3
            ],
            [
                "bar",
                2
            ],
            [
                "baz",
                2
            ],
            [
                "foo",
                2
            ],
            [
                "toto",
                1
            ]
        ]);
      });
})

//tests d'erreurs
describe("When I don't have a string as first argument", () => {
    test("then it should throw an error if undefined", function () {
        const testingUndefined = undefined
        expect(() => frequenciesOfWords(testingUndefined, 2)).toThrow('Argument must be a string')
    })
    test("then it should throw an error if empty array", function () {
        expect(() => frequenciesOfWords([], 2)).toThrow('Argument must be a string')
    })
    test("then it should throw an error if number", function () {
        expect(() => frequenciesOfWords(1066, 2)).toThrow('Argument must be a string')
    })
})

describe("When I don't have a number as second argument", () => {
    test("then it should throw an error if undefined", function () {
        const testingUndefined = undefined
        expect(() => frequenciesOfWords("test test test", testingUndefined)).toThrow("Argument must be a positive number")
    })
    test("then it should throw an error if string", function () {
        expect(() => frequenciesOfWords("test test test", "toto")).toThrow("Argument must be a positive number")
    })
    test("then it should throw an error if empty array", function () {
        expect(() => frequenciesOfWords("test test test", [])).toThrow("Argument must be a positive number")
    })
    test("then it should throw an error if negative number", function () {
        expect(() => frequenciesOfWords("test test test", -2)).toThrow("Argument must be a positive number")
    })
})