// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  /*
  buildShift ::
    input: alphabet and shift amount.
    output: new alphabet array
  */
 function buildShift(alphabet, shift) {
    //build a clone of the alphabet
    let shiftedAlphabet = JSON.parse(JSON.stringify(alphabet));
    if(shift > 0) {
      //if we are a positive shift we will move the first letter to the back of the list, a number of times equal to the shift.
      for(let count = 0; count < shift; count++) {
        const letterToMove = shiftedAlphabet.shift();
        shiftedAlphabet.push(letterToMove)
      }
    } else {
      //if we are a negative shift we will move the last letter to the front of the list, a number of times equal to the shift.
      for(let count = 0; count > shift; count--) {
        const letterToMove = shiftedAlphabet.pop();
        shiftedAlphabet.unshift(letterToMove)
      }
    }
    return shiftedAlphabet;
  }
  

  /*
  shiftMessage ::
    input: message to encode/decode, base alphabet and shifted alphabet
    output: message that is encoded/decoded
  */
  function shiftMessage(message, alphabet, shiftedAlphabet) {
    //then for the message look up each letter in the alphabet
    //then the same index look up the shiftedAlphabet and return the new message.
    let newMessage = '';
    for(let index = 0; index < message.length; index++) {
      const letterAtIndex = message.charAt(index);
      if(letterAtIndex.match(/[A-Za-z]/)) {
        //if it is a letter it is in our mapping
        const alphaIndex = alphabet.indexOf(letterAtIndex.toLowerCase());
        newMessage += shiftedAlphabet[alphaIndex];
      } else {
        //otherwise pass it through a space or symbol.
        newMessage += letterAtIndex;
      }
    }
    return newMessage;
  }

  
  /*
  caesar ::
    input: message to encrypt, how much to shift the alphabet by, and flag of whether to encode or decode
    output: message or false if it doesn't meet params.
  */
  function caesar(input, shift, encode = true) {
    // check if the shift is an invalid number of 0, 26 or more, -26 or less
    if(shift === 0 || shift > 25 || shift < -25) return false;

    //if the encode === false we want to times the shift by a -1 to reverse it.
    if(!encode) shift *= -1;

    //build an alphabet.
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    // get out shifted alphabet
    const shiftedAlphabet = buildShift(alphabet, shift);

    //return our shifted message
    return shiftMessage(input, alphabet, shiftedAlphabet);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
