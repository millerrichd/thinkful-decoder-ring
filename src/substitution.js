// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //check if the alphabet is even defined.
    if(!alphabet) return false

    //check the length of the alphabet is 26 characters
    if(!(alphabet.length === 26)) return false;

    //now we check for duplicates, by dumping it into a set, which must always be unique value.
    const alphaSet = new Set(alphabet);
    if(!(Array.from(alphaSet).length === 26)) return false;

    //build out base alphabet.
    const baseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let newMessage = '';
    if(encode) {
      //encode the string
      for(let index = 0; index < input.length; index++) {
        const letterAtIndex = input.charAt(index);
        if(letterAtIndex.match(/[A-Za-z]/)) {
          const alphaIndex = baseAlphabet.indexOf(letterAtIndex.toLowerCase());
          newMessage += alphabet[alphaIndex];
        } else {
          newMessage += letterAtIndex;
        }
      }
    } else {
      //then we are decoding
      for(let index = 0; index < input.length; index++) {
        const letterAtIndex = input.charAt(index);
        if(letterAtIndex.match(/\s/)) {
          newMessage += letterAtIndex;
        } else {
          const alphaIndex = alphabet.indexOf(letterAtIndex.toLowerCase());
          newMessage += baseAlphabet[alphaIndex];
        }
      }
    }

    //finally return the new message
    return newMessage;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
