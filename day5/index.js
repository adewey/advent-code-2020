const calc = (instructions, maximum) => {
    let min = 0;
    let max = maximum;
    for (const instruction of instructions) {
        if (["F", "L"].includes(instruction)) {
            max = Math.floor(max - (max - min) / 2);
        }
        if (["B", "R"].includes(instruction)) {
            min = Math.ceil(min + (max - min) / 2);
        }
    }
    return max;
};

export default (boardingPassList) => boardingPassList.reduce((acc, boardingPass) => {
    if (!boardingPass) return acc;
    const row = calc(boardingPass.slice(0, 7), 127);
    const col = calc(boardingPass.slice(7), 7);
    const seatId = row * 8 + col;
    if (seatId > acc.max) {
        return {
            ...acc,
            [seatId]: { row, col },
            max: seatId,
        };
    }
    return {
        ...acc,
        [seatId]: { row, col },
    };
}, { max: 0 });
