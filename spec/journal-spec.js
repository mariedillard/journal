import { entryCount } from './../src/journal.js';
import { vowelCount } from './../src/journal.js';
describe('Journal', function() {

  it('should test whether word count is correct', function() {
    var input = "two words";
    expect(entryCount(input)).toEqual(2);
  });

  it('should test whether vowel count is correct', function() {
    var input = "two words";
    expect(vowelCount(input)).toEqual(2);
  });
});
