const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((letters) => letters.join(""));
  let wordFound = false;
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      wordFound = true;
    }
  }
  return wordFound;
};

module.exports = wordSearch;
