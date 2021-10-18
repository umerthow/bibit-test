const strings = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const result = [];
function getGroupedAnagrams(words) {
  const anagrams = {};
  words.forEach((word) => {
    const sortedWord = word.split('').sort();
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
}


const groupedAnagrams = getGroupedAnagrams(strings);

for (const sortedWord in groupedAnagrams) {
  result.push(groupedAnagrams[sortedWord]);
}



console.log(result);
