function hasUniqueCharacters(username) {
    // Create a new Set
    const uniqueChars = new Set();
  
    // Iterate over each character in the username string
    for (const char of username) {
      // If the character is already in the Set, return false
      if (uniqueChars.has(char)) {
        return false;
      }
      // Otherwise, add the character to the Set
      uniqueChars.add(char);
    }
  
    // If all characters are unique, return true
    return true;
  }
  
  // Example usage:
  const username1 = "abcdefg";
  const username2 = "hello";
  
  console.log(`${username1} has unique characters: ${hasUniqueCharacters(username1)}`); // true
  console.log(`${username2} has unique characters: ${hasUniqueCharacters(username2)}`); // false
  