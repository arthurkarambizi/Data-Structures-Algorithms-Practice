function nthSmallest() {
    let params = [...arguments];
    let nth = params[params.length - 1];
    let smallest;
    const joinArrays = params
        .slice(0, -1)
        .join(',')
        .split(',')
        .sort();
    let nthSmallest = joinArrays[nth - 1];
    if (nthSmallest) {
        smallest = nthSmallest;
    }
    return smallest;
}

//--------------------------------------------------------------------------------
function nthSmallest(...args) {
    const ind = args.pop() - 1;
    return args.reduce((res, v) => res.concat(v)).sort((a, b) => a - b)[ind];
}

nthSmallest([1, 5], [2], [4, 8, 9], 4);
