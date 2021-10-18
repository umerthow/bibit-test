Q: 
Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok  Anagramnya, 
Catatan: tidak boleh menggunakan syntax es6 map, reduce, find, filter # Expected Outputs 
[ 
 ["kita", "atik", "tika"], 
 ["aku", "kua"], 
 ["makan"], 
 ["kia"] 
]

A: 

``` javascript

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

```

```
resul : [
  [ 'kita', 'atik', 'tika' ],
  [ 'aku', 'kua' ],
  [ 'kia' ],
  [ 'makan' ]
]
```