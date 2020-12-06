import { getInput } from '../../utils';
import decodeBoardingPass from '..';

test(`--- Part Two ---
Ding! The "fasten seat belt" signs have turned on. Time to find your seat.

It's a completely full flight, so your seat should be the only missing boarding pass in your list. However, there's a catch: some of the seats at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.

Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.

What is the ID of your seat?`, () => {
    const input = getInput('../day5/input');
    const { max, ...boardingPasses } = decodeBoardingPass(input);
    const emptySeat = () => {
        const seatIds = Object.keys(boardingPasses);
        for (let index = 0; index < max; index++) {
            const seatId = parseInt(seatIds[index]);
            if (isNaN(seatId)) continue;
            const nextSeatId = boardingPasses[seatId + 1];
            if (!nextSeatId) return seatId + 1;
        }
    }
    expect(emptySeat()).toEqual(629);
});
