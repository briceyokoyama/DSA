function insertionSort(arr) {
  let idx;

  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    idx = i;
    for (let j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      arr[j + 1] = arr[j]
      idx = j;
    }
    arr[idx] = currElement;
  }
  
  return arr;
}

module.exports = {
    insertionSort
};