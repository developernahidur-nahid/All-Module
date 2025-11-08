// Iterative binary search - returns index or -1
function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = arr[mid];

    if (val === target) {
      return mid;
    } else if (val < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; 
}

// Example:
const nums = [1, 3, 5, 7, 9, 11];
console.log(binarySearchIterative(nums, 7)); // Output --> [3]         
console.log(binarySearchIterative(nums, 4)); // Output --> [-1]
 