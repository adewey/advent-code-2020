import { getInput } from '../../utils';
import validPasswords from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day2/input');
  expect(validPasswords(input)).toMatchInlineSnapshot(`528`);
});
