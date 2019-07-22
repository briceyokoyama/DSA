// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  if (array[idx] === undefined) return true;

  let leftIdx = idx*2;
  let rightIdx = idx*2 + 1;
  let left = array[leftIdx];
  let right = array[rightIdx];

  if (array[idx] < left || array[idx] < right) return false;

  let leftResult = isMaxHeap(array, idx*2);
  let rightResult = isMaxHeap(array, idx*2 + 1);

  if (leftResult && rightResult) return true;

  return false;

}


module.exports = {
    isMaxHeap
};