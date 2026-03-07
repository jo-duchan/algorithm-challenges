// 마지막 두 원소

function lastTwoNumbers(num_list) {
  const lastTo2ndNum = num_list[num_list.length - 2];
  const lastNum = num_list[num_list.length - 1];
  const addNum = lastNum > lastTo2ndNum ? lastNum - lastTo2ndNum : lastNum * 2;

  return [...num_list, addNum];
}

// lastTwoNumbers([2, 1, 6]);
// [ 2, 1, 6, 5 ]
// lastTwoNumbers([5, 2, 1, 7, 5]);
// [ 5, 2, 1, 7, 5, 10 ]
