// https://school.programmers.co.kr/learn/courses/30/lessons/42842#qna
// 카펫

function solution(brown, yellow) {
  let width = brown / 2;
  let height = 2;

  let isFinish = false;
  while (!isFinish) {
    width--;
    height++;

    let carpet = height * width;
    isFinish = carpet === brown + yellow;
  }
  return [width, height];
}

// solution(8, 1);
// [3, 3]
