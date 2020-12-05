import { getInput } from '../../utils';
import validPassports from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day4/input');
  expect(validPassports(input)).toEqual(242);
});
