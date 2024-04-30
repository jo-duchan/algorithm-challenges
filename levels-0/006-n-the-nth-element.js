// n 번째 원소까지

function nTheNthElement(num_list, n) {
  return num_list.slice(0, n);
}

// nTheNthElement([2, 1, 6], 1);
// [2]
// nTheNthElement([5, 2, 1, 7, 5], 3);
// [5, 2, 1]
