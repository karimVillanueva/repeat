/* eslint-env jest */
const { countCharacter } = require('./index')

describe('countCharacter', () => {
  test('counts occurrences of a character in a string', () => {
    expect(countCharacter('hello world', 'l')).toBe(3)
    expect(countCharacter('hello world', 'o')).toBe(2)
    expect(countCharacter('hello world', 'z')).toBe(0)
    expect(countCharacter('', 'a')).toBe(0)
    expect(countCharacter('aaaa', 'a')).toBe(4)
    expect(countCharacter('Aaaa', 'a')).toBe(3) // Case sensitive
    expect(countCharacter(null, '')).toBe(0)
  })
})
