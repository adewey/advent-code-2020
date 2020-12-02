import { getInput } from '../../utils';
import expenseReportChecker from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day1/input');
  expect(expenseReportChecker(input, 3)).toMatchInlineSnapshot(`73616634`);
});
