// 문제 링크: https://jsalgo.co.kr/?page=5

// 1. 문제 설명
// 0과 #이 들어 있는 2차원 배열을 입력 받았을 때,
// #의 갯수와 0에 인접한 #의 갯수를 배열에 감싸 출력
// 이때 인접이란 4방위(북서, 북, 북동, 동, 남동, 남, 남서, 서) 총 8개를 의미함.

// 2. 풀이 방법 설명
// num과 sum을 0으로 초기화한다.
// 8방향 탐색을 위해 directions 배열을 정의한다.
// 2차원 배열을 이중 for문으로 순회한다.

// 현재 값이 '#'이면 num을 증가시킨다.

// 현재 값이 0이면 directions를 순회하며 8방향을 탐색한다.
// 이때 nx, ny가 배열 범위를 벗어나지 않도록
// nx는 0 이상 data.length 미만,
// ny는 0 이상 data[nx].length 미만인지 확인한다.

// 범위를 만족하면서 해당 위치가 '#'인 경우 sum을 증가시킨다.

// 최종적으로 [num, sum]을 반환한다.

// 3. 구현
function solution(data) {
  let num = 0;
  let sum = 0;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === '#') {
        num += 1;
      }

      if (data[i][j] === 0) {
        for (const [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;

          if (
            nx >= 0 &&
            nx < data.length &&
            ny >= 0 &&
            ny < data[nx].length &&
            data[nx][ny] === '#'
          ) {
            sum += 1;
          }
        }
      }
    }
  }

  return [num, sum];
}

solution([
  [0, 0, '#', '#'],
  ['#', '#', 0, '#'],
  [0, '#', '#', 0],
]); // [7, 16]
