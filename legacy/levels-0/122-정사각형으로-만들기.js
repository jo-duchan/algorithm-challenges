// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  if (rows > cols) {
    return arr.map((row) => [...row, ...Array(rows - cols).fill(0)]);
  } else if (rows < cols) {
    return [
      ...arr,
      ...Array(cols - rows)
        .fill()
        .map(() => Array(cols).fill(0)),
    ];
  }

  return arr;
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
// ];
