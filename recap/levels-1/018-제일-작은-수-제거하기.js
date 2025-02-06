// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  const min = Math.min(...arr);
  const filteredArr = arr.filter((x) => x != min);

  return filteredArr.length > 0 ? filteredArr : [-1];
}

solution([4, 3, 2, 1]);
// [ 4, 3, 2 ]
