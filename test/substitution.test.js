const expect = require('chai').expect;
const substitution = require('../src/substitution').substitution;

describe('substitution', () => {
  describe('error', () => {
    it('should return false for no alphabet', () => {
      const actual = substitution("hello");
      expect(actual).to.be.false;
    });
    it('should return false for an alphabet not 26 characters', () => {
      const actual = substitution("hello","nottwentysix");
      expect(actual).to.be.false;
    });
    it('should return false for an alphabet that is not unique letters', () => {
      const actual = substitution("hello","aaabcdegikmnopqrstuvwxyzzz");
      expect(actual).to.be.false;
    });
  });
  describe('encode', () => {
    it('should encode the message', () => {
      const actual = substitution('hello','zyxwvutsrqponmlkjihgfedcba');
      expect(actual).to.equal('svool')
    });
    it('should work with any unique key', () => {
      const actual = substitution('hello','gfedvut$rqponzy%wmlkj!hcba');
      expect(actual).to.equal('$vooy')
    });
    it('should keep spaces', () => {
      const actual = substitution('hello world','zyxwvutsrqponmlkjihgfedcba');
      expect(actual).to.equal('svool dliow')
    });
    it('should make uppercase into lowercase', () => {
      const actual = substitution('HELLO','zyxwvutsrqponmlkjihgfedcba');
      expect(actual).to.equal('svool')
    });
  });
  describe('decode', () => {
    it('should decode the message', () => {
      const actual = substitution('svool','zyxwvutsrqponmlkjihgfedcba', false);
      expect(actual).to.equal('hello')
    });
    it('should work with any unique key', () => {
      const actual = substitution('$vooy','gfedvut$rqponzy%wmlkj!hcba', false);
      expect(actual).to.equal('hello')
    });
    it('should keep spaces', () => {
      const actual = substitution('svool dliow','zyxwvutsrqponmlkjihgfedcba', false);
      expect(actual).to.equal('hello world')
    });
  });
});