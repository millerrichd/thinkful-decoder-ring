# thinkful-decoder-ring
Decoder ring with 3 ciphers that I write the algorithms for.

## Project

Write a caesar, polybius, and substitution ciphers algorithms and supporting tests for those ciphers.

### Exposed Functions

#### Caesar
`caesar` requires a message, a shift amount, and whether to encode or decode. Output a new message.

```caesar("hello world",3) //khoor zruog```

```caesar("khoor zruog",3,false) //hello world```


#### Polybius
`polybius` requires a message and whether to encode or decode. Output a new message.

```polybius("hello world") //3251131343 2543241341```

```polybius("3251131343 2543241341", false) //hello world```


#### Substitution
`substitution` requires a message, an encrypted alphabet, and wether to encdoe or decode. Output a new message.

```substitution("hello world", "zyxwvutsrqponmlkjihgfedcba") //svool dliow```

```substitution("svool dliow", "zyxwvutsrqponmlkjihgfedcba", false) //hello world```


### Tests Written by Me

`caesar.test.js` Contains the tests that test the caesar function.

`polybius.test.js` Contains the tests that test the polybius function.

`substitution.test.js` Contains the tests that test the subsititution function.

