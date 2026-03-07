// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
  let answer = [];

  if (arr.length > arr[0].length) {
    const size = arr.length - arr[0].length;

    answer = arr.map((innerArr) => [...innerArr, ...Array(size).fill(0)]);
  } else {
    const size = arr[0].length - arr.length;
    const zeroArr = [...Array(size)].map(() => Array(arr[0].length).fill(0));

    answer = [...arr, ...zeroArr];
  }

  return answer;
}

// solution([
//   [57, 192, 534, 2],
//   [9, 345, 192, 999],
// ]);
// [
//   [57, 192, 534, 2],
//   [9, 345, 192, 999],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ]
