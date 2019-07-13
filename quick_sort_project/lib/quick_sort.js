function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter(num => num <= pivot);
  let right = array.filter(num => num > pivot);

  left = quickSort(left);
  right = quickSort(right);

  return [...left, pivot, ...right];
}


module.exports = {
    quickSort
};