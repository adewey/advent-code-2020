import { getInput } from '../../utils';
import encounterTrees from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day3/input');
  expect(encounterTrees(input, 1, 3)).toEqual(252);
});
