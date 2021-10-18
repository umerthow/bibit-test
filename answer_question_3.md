Q: Refactor the code below to make it more concise, efficient and readable  with good logic flow. 


```
function findFirstStringInBracket(str) {
  if (str.length > 0) {
    const indexFirstBracketFound = str.indexOf('(');
    if (indexFirstBracketFound >= 0) {
      let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
      if (wordsAfterFirstBracket) {
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
        const indexClosingBracketFound = wordsAfterFirstBracket.indexOf(')');
        if (indexClosingBracketFound >= 0) {
          return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
        }
        return '';
      }
      return '';
    }
    return '';
  }
  return '';
}
```

A: 
``` javascript

function findFirstStringInBracket(str) {
  let stringMatch = str.match(/\(.+?\)/g);
  if (stringMatch) {
    stringMatch.filter((strVal) => {
      const indexFirstBracket = strVal.indexOf('(') + 1;
      const indexLastBracket = strVal.indexOf(')') - 1;
      const wordsAfterFirstBracket = strVal.substr(indexFirstBracket);
      stringMatch = wordsAfterFirstBracket.substring(0, indexLastBracket);
      return stringMatch;
    });

    return stringMatch;
  }
  return '';
}

```