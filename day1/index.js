const collectExpenses = (expenseReport, goal, depth) => {
    if (depth === 0) return;
    for (const expense of expenseReport) {
        const remaining = goal - expense;
        if (remaining === 0) {
            return [expense];
        }
        const expenses = collectExpenses(expenseReport, remaining, depth - 1);
        if (expenses) {
            return [...expenses, expense]
        }
    }
}

export default (expenseReport, depth = 2) => {
    const resp = collectExpenses(expenseReport, 2020, depth)
    if (resp.length === depth) {
        const total = resp.reduce((acc, expense) => acc * expense, 1);
        console.log("Matching Expenses:", ...resp);
        console.log("Answer:", total);
        return total;
    }
};
