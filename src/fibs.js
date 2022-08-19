function fibs(n) {
    let farr = [0, 1];
    for (let i = 0; i < n - 2; i++) {
        farr.push(farr[i] + farr[i + 1]);
    }
    return farr;
};
