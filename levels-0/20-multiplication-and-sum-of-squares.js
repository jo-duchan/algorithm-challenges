// 원소들의 곱과 합

function multiplicationAndSumOfSquares(num_list) {
  let sum = 0;
  let multi = 1;

  num_list.map((num) => {
    sum += num;
    multi *= num;
  });

  return Math.pow(sum, 2) > multi ? 1 : 0;
}

// multiplicationAndSumOfSquares([5, 7, 8, 3]);
// 0
