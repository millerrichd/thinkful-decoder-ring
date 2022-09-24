// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //separating encode and decode into their own function for readability

  /*
  encodeMessage ::
    input: message to encrypt, polybius mapping
    output: encrypted message
  */
  function encodeMessage(message, polybiusMapping) {
    let newMessage = '';
    //if it is encode we want to read in each letter, look up its value and add the value to newMessage
    for(let index = 0;index < message.length; index++) {
      //find the letter at the index
      const letter = message[index];
      if(letter === ' ') {
        //if letter is a space add a space to newMessage.
        newMessage += ' ';
      } else {
        //otherwise look up the number in teh mapping and add that number to the message.
        newMessage += polybiusMapping[letter.toLowerCase()];
      }        
    }
    return newMessage
  }

  /*
  decodeMessage ::
    input: message to encrypt, polybius mapping
    output: encrypted message or false if it does not meet params
  */
  function decodeMessage(message, polybiusMapping) {
    let newMessage = ''
    //if it is not encode it must be decode.
    //Here we split the numbers by any spaces.
    const words = message.split(' ');
    //loop through each word and check if it is odd.
    //Doing this here so we don't go through all the letters if we dont need to.
    for(let index = 0;index < words.length; index++) {
      if(words[index].length % 2) return false;
    }
    //we know we have correct word lengths so go through each word, this time doing the work of converting.
    words.forEach(word => {
      //going to increment the index by 2, so we keep jumping over the odd numbers in the list.
      for(let index = 0; index < word.length; index += 2) {
        //out next number in the list is a pulled out of the word based on the index and going 2 spaces over to return 2 numbers.
        const nextNumber = word.substring(index, index+2);

        //get the keys of the mapping, find the value that matches to get the key letter.
        let found = Object.keys(polybiusMapping).find(key => polybiusMapping[key] === Number(nextNumber));

        //if i or j is found then make it really equal both.
        if(found === 'i' || found === 'j') found = '(i/j)';

        //finally add the letter to the mapping.
        newMessage += found
      }
      //if we actual have 2+ words, add spaces.
      if(words.length) { newMessage += ' '}
    });
    //we return the new message with a trim() just encase we added an extra space during the decode.
    return newMessage.trim();
  }

  
  /*
  polybius ::
    input: message to encrypt, flag of whether to encryt or decrypt
    output: (en|de)crypted message or false if it does not meet params
  */
  function polybius(input, encode = true) {
    // build a mapping of the letters to numbers
    const polybiusMapping = {
      a: 11, b: 21, c: 31, d: 41,        e: 51,
      f: 12, g: 22, h: 32, i: 42, j: 42, k: 52,
      l: 13, m: 23, n: 33, o: 43,        p: 53,
      q: 14, r: 24, s: 34, t: 44,        u: 54,
      v: 15, w: 25, x: 35, y: 45,        z: 55
    }

    let newMessage = '';
    if(encode) {
      newMessage = encodeMessage(input, polybiusMapping);
    } else {
      newMessage = decodeMessage(input, polybiusMapping);
    }

    //return the final message
    return newMessage;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
