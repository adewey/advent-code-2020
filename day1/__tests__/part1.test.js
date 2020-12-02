import { getInput } from '../../utils';
import expenseReportChecker from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day1/input');
  expect(expenseReportChecker(input, 2)).toMatchInlineSnapshot(`121396`);
});
