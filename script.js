function solve(input) {
  const words = input.split(' ');
  let longestWord = '';
  let maxVowels = 0;

  for (const word of words) {
    // This will replace all the non-alphabets with empty character and convert all the chars to lowercase
    const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // This will count the vowels in the given word
    const vowelCount = (cleanWord.match(/[aeiou]/gi) || []).length;

    if (
      cleanWord.length > longestWord.length ||
      (cleanWord.length === longestWord.length && vowelCount > maxVowels)
    ) {
      longestWord = cleanWord;
      maxVowels = vowelCount;
    }
  }

  return longestWord;
}

let test1 =
  'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';

let test2 =
  'Smart people learn from everything and everyone and Test@@@@@@###@@#';

let test3 =
  'Hello there, 123456789045 this side, please let me know your experience';

const result = solve(test3);
console.log(result);
