/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    const word = sen.replace(/[^a-z0-9\s]/g," ").split(" ");
    let longest = word[0];
    word.forEach(word=>{
        if(word.length >longest.length)
        {
            longest=word;
        }
    });
    return longest;
}

export { longestWord };
