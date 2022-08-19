function merge(arr1, arr2) {
    const mArr = [];

    while (arr1.length && arr2.length) {
        const [arr1First] = arr1;
        const [arr2First] = arr2;

        if (arr1First > arr2First) {
            mArr.push(arr2First);
            arr2.shift();
        } else {
            mArr.push(arr1First);
            arr1.shift();
        }
    }
    return arr1.length ? [...mArr, ...arr1] : [...mArr, ...arr2];
}

function mergeSort(arr, lArr = [], rArr = []) {
    if (!arr.length || arr.length === 1) {
        return arr;
    }

    const m = Math.ceil(arr.length / 2);
    const lH = arr.slice(0, m);
    const rH = arr.slice(m);

    const sortedLH = mergeSort(lH);
    const sortedRH = mergeSort(rH);

    return [...merge(sortedLH, sortedRH)];
}
