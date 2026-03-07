// https://school.programmers.co.kr/learn/courses/30/lessons/181857

// 2 ** Math.ceil(Math.log2(arr.length))
// log2를 이용해 해당 숫자를 만들기 위해 2를 몇번 곱했는지 구할 수도 있음.

function solution(arr) {
  let increment = 0;
  let answer = [];

  while (true) {
    let temp = Math.pow(2, increment);

    if (temp >= arr.length) {
      const zeroArr = new Array(temp - arr.length).fill(0);
      answer = [...arr, ...zeroArr];
      break;
    }

    increment++;
  }

  return answer;
}

// solution([1, 2, 3, 4, 5, 6]);
// [1, 2, 3, 4, 5, 6, 0, 0];
// solution([1]);
// [ 1 ]
