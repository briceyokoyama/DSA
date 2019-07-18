function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
}

function selectionSort(arr) {
  let swapIdx;
  let minIdx;
  for (let i = 0; i < arr.length; i++) {
    swapIdx = i;
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    swap(arr, swapIdx, minIdx);
  }
  return arr;
}

module.exports = {
    selectionSort,
    swap
};