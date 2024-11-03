function binarySearchWitIndex(arr, value, offset = 0) {
    const index = Math.floor(arr.length / 2);
    const v = arr[index];

    if (v === value) return offset + index;
    if (arr.length === 1) return -1;
    if (v > value) return binarySearch(arr.slice(0, index), value, offset);

    return binarySearch(arr.slice(index + 1), value, offset + index + 1);
}

function binarySearch(arr, value) {
    const index = Math.floor(arr.length / 2);
    const v = arr[index];

    if (v === value) return true;
    if (arr.length === 1) return false;
    if (v > value) return binarySearch(arr.slice(0, index), value);

    return binarySearch(arr.slice(index + 1), value);
}

console.log(binarySearch([1, 2, 3, 10, 20, 30, 40, 50, 100], 101));
