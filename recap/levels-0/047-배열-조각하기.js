// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
  let start = 0;
  let end = arr.length;

  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      end = start + query[i] + 1;
    } else {
      start = start + query[i];
    }
  }

  return arr.slice(start, end);
}

// solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);
// [1, 2, 3]
