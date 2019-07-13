function merge(array1, array2) {
  let merged = [];

  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      merged.push(array1.shift());
    } else {
      merged.push(array2.shift());
    }
  }

  merged = merged.concat(array1).concat(array2);
  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let midIdx = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0,midIdx));
  let right = mergeSort(array.slice(midIdx));

  return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};