// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //pulling the encode and decode functions into their own helper function to make it more readable

  /*
    encodeMessage ::
      input: message, encrypted alphabet, base alphabet
      output: encrypted message
  */
  function encodeMessage(message, alphabet, baseAlphabet) {
    let newMessage = '';

    //encode the string
    for(let index = 0; index < message.length; index++) {
      //find the character at the message index
      const charAtIndex = message.charAt(index);
      
      if(charAtIndex.match(/\s/)) {
        //if it is a space just move the space over.
        newMessage += charAtIndex;
      } else {
        //otherwise read get the index of the letter of the alphabet and then use that index in the encrypted alphabet.
        const alphaIndex = baseAlphabet.indexOf(charAtIndex.toLowerCase());
        newMessage += alphabet[alphaIndex];
      }
    }
    return newMessage;
  }

  /*
    decodeMessage ::
      input: message, encrypted alphabet, base alphabet
      output: decrypted message
  */
  function decodeMessage(message, alphabet, baseAlphabet) {
    let newMessage = '';

    //decode the string
    for(let index = 0; index < message.length; index++) {
      //find the character at the message index
      const charAtIndex = message.charAt(index);

      if(charAtIndex.match(/\s/)) {
        //if it is a space just move the space over.
        newMessage += charAtIndex;
      } else {
        //otherwise read get the index of the letter of the alphabet and then use that index in the encrypted alphabet.
        const alphaIndex = alphabet.indexOf(charAtIndex.toLowerCase());
        newMessage += baseAlphabet[alphaIndex];
      }
    }
    return newMessage;
  }

  /*
  substitution ::
    input: input message, alphabet, and flag to encode or decode
    output: encrypted message;
  */
  function substitution(input, alphabet, encode = true) {
    //check if the alphabet is even defined.
    if(!alphabet) return false

    //check the length of the alphabet is 26 characters
    if(!(alphabet.length === 26)) return false;

    //now we check for duplicates, by dumping it into a set, which must always be unique value.
    const alphaSet = new Set(alphabet);
    if(!(Array.from(alphaSet).length === 26)) return false;

    //build out base alphabet.
    const baseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    let newMessage = '';
    //encode or decode based on the flag.
    if(encode) {
      newMessage = encodeMessage(input, alphabet, baseAlphabet);
    } else {
      newMessage = decodeMessage(input, alphabet, baseAlphabet);
    }

    //finally return the new message
    return newMessage;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
