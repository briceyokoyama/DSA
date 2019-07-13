function radixSort(arr) {
  if (!Array.isArray(arr)) return null;

  let times = getMaxDigits(arr);

  for (let i = 0; i < times; i++) {
     let buckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigitFrom(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function getDigitFrom(num, place) {
return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10;
}

function getIntLength(num) {
  if (num === 0 ) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxDigits(nums) {
  var maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]))
  }

  return maxDigits;
}

module.exports = {
    radixSort
};