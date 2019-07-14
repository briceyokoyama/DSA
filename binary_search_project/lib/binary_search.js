function binarySearch(array, target) {

  if (array.length <= 1 && array[0] !== target) return false;

  let midIndex = Math.floor(array.length/2);
  if (array[midIndex] === target) return true;

  let left = array.slice(0, midIndex);
  let right = array.slice(midIndex);

  if (target < array[midIndex]) {
    return binarySearch(left, target);
  } else {
    return binarySearch(right, target);
  }

}

function binarySearchIndex(array, target) {
  if (array.length <= 1 && array[0] !== target) return -1;
  let midIndex = Math.floor(array.length/2);
  if (array[midIndex] === target) return midIndex;

  let left = array.slice(0, midIndex);
  let right = array.slice(midIndex);

  if (target < array[midIndex]) {
    return binarySearchIndex(left, target);
  } else {
    let result = binarySearchIndex(right, target);
    if (result) {
      return midIndex + result;
    } else {
      return -1;
    }
  }
}

module.exports = {
    binarySearch,
    binarySearchIndex
};