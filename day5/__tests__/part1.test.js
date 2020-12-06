import { getInput } from '../../utils';
import decodeBoardingPass from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day5/input');
  expect(decodeBoardingPass(input).max).toEqual(911);
});
