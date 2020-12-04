export default (slopeGraph, xStep = 1, yStep = 3) => {
    let treeCounter = 0;
    let stepsTaken = 0;
    for (let index = 0; index < slopeGraph.length; index += xStep) {
        const row = slopeGraph[index];
        if (row[(stepsTaken * yStep) % row.length] === '#') {
            treeCounter++;
        }
        stepsTaken++;
    }
    return treeCounter;
}
