import { getInitials, keepNumbers } from './stringUtils';

describe('getInitialsTest', () => {
  const FUNCTION_INITIALS = jest.fn();
  test('get initals by word', () => {
    const HELLO_WORLD = 'Hello-World!';
    const CHALLENGER_SPACE_SHUTTLE = 'challenger space shuttle';
    expect(getInitials(HELLO_WORLD)).toBe('H');
    expect(getInitials(CHALLENGER_SPACE_SHUTTLE)).toBe('c s s');
    expect(FUNCTION_INITIALS(HELLO_WORLD));
    expect(FUNCTION_INITIALS).toHaveBeenCalledTimes(1);
    expect(FUNCTION_INITIALS).toHaveBeenCalledWith(HELLO_WORLD);
  });
  test('first initial its blank space', () => {
    expect(getInitials(' ')).toBe(' ');
  });
  test('first initial multi-words was blank spaces', () => {
    const INITIAL_BLANK_SPACE = ' hello  world  blankspace';
    expect(getInitials(INITIAL_BLANK_SPACE)).toBe(' h  w  b');
  });
  test('getInitials called without string argument', () => {
    expect(getInitials()).toBeUndefined();
  });
});
describe('keepNumbersTest', () => {
  const FUNCTION_KEEPNUMBERS = jest.fn();
  const EMPTY_STRING = '';
  test('get numbers', () => {
    const NUMBER_TEST = '1881';
    expect(keepNumbers(NUMBER_TEST)).toEqual(NUMBER_TEST);
    expect(FUNCTION_KEEPNUMBERS(NUMBER_TEST));
    expect(FUNCTION_KEEPNUMBERS).toHaveBeenCalledWith(NUMBER_TEST);
  });
  test('get numbers of array', () => {
    const STRING_TEST = '1881 hello world';
    expect(keepNumbers(STRING_TEST)).toBe('1881');
  });
  test('get numbers by empty String', () => {
    expect(keepNumbers(EMPTY_STRING)).toStrictEqual(EMPTY_STRING);
  });
  test('get numbers by only letters string', () => {
    const STRING_WITHOUT_NUMBERS = 'hello world test case';
    expect(keepNumbers(STRING_WITHOUT_NUMBERS)).toBe(EMPTY_STRING);
  });
  test('get numbers of decimal string', () => {
    const DECIMAL_STRING = '192.188118821883';
    const EXPECTED_RESULT = '192188118821883';
    expect(keepNumbers(DECIMAL_STRING)).toEqual(EXPECTED_RESULT);
  });
});
