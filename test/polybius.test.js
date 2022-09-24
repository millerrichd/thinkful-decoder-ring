const expect = require('chai').expect;
const polybius = require('../src/polybius').polybius;

// Write your tests here!
describe('polybius', () => {
  describe('encoding', () => {
    it('should encode a message', () => {
      const actual = polybius('hello');
      expect(actual).to.equal('3251131343');
    });
    it('should translate i and j as 42', () => {
      const actual = polybius('ij');
      expect(actual).to.equal('4242');
    });
    it('should keep spaces', () => {
      const actual = polybius('hello world');
      expect(actual).to.equal('3251131343 2543241341');
    });
    it('should translate capital and lowercase the same', () => {
      const actual = polybius('HELLO');
      expect(actual).to.equal('3251131343');
    });
  });
  describe('decoding', () => {
    it('should decode a message', () => {
      const actual = polybius('3251131343', false);
      expect(actual).to.equal('hello');
    });
    it('should translate 42 into i and j', () => {
      const actual = polybius('42', false);
      expect(actual).to.equal('(i/j)');
    });
    it('should keep spaces', () => {
      const actual = polybius('3251131343 2543241341', false);
      expect(actual).to.equal('hello world');
    });
    it('should return false if odd number of numbers in list minus spaces', () => {
      const actual = polybius('123', false);
      expect(actual).to.equal(false);
    });
  });
});