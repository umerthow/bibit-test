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