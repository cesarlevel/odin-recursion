function fibsRec(n, farr = [0, 1]) {
    return n === 2
        ? farr
        : fibsRec(n - 1, [...farr, farr.at(-2) + farr.at(-1)]);
};
