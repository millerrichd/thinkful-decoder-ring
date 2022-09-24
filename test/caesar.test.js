const expect = require('chai').expect;
const caesar = require('../src/caesar').caesar;

// Write your tests here!
describe('caesar', () => {
  describe('errors', () => {
    const message = "hello world";
    it('should return false when shift is 0',() => {
      const actual = caesar(message, 0)
      expect(actual).to.equal(false);
    });
    it('should return false when shift is 26 or more',() => {
      const actual = caesar(message, 26)
      expect(actual).to.equal(false);
    });
    it('should return flase when shift is -26 or less',() => {
      const actual = caesar(message, -26)
      expect(actual).to.equal(false);
    });
  });
  describe('encoding', () => {
    it('should encode a message by shifting', () => {
      const actual = caesar('hello world!', 3);
      expect(actual).to.equal('khoor zruog!');
    });
    it('should leave symbols and spaces alone', () => {
      const actual = caesar('hello world!', 3);
      expect(actual).to.match(/[\s\!]/);
    });
    it('should make capitals be lowercase', () => {
      const actual = caesar('Hello World!', 3);
      expect(actual).to.equal('khoor zruog!');
    });
    it('should word wrap correctly at the end of the alphabet', () => {
      const actual = caesar('hello world!', 7);
      expect(actual).to.equal('olssv dvysk!');
    });
    it('should allow for a negatice shift', () => {
      const actual = caesar('hello world!', -3);
      expect(actual).to.equal('ebiil tloia!');
    });
  });
  describe('decoding', () => {
    it('should decode a message by shifting the letters backwards', () => {
      const actual = caesar('khoor zruog!', 3, false);
      expect(actual).to.equal('hello world!');
    });
    it('should leave symbols and spaces alone', () => {
      const actual = caesar('khoor zruog!', 3, false);
      expect(actual).to.match(/[\s\!]/);
    });
    it('should make capitals be lowercase', () => {
      const actual = caesar('Khoor Zruog!', 3, false);
      expect(actual).to.equal('hello world!');
    });
    it('should word wrap correctly at the end of the alphabet', () => {
      const actual = caesar("olssv dvysk!", 7, false);
      expect(actual).to.equal('hello world!');
    });
    it('should allow for a negatice shift', () => {
      const actual = caesar('ebiil tloia!', -3, false);
      expect(actual).to.equal('hello world!');
    });
  });
});