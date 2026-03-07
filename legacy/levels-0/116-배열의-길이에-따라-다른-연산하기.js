// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr, n) {
  const isEven = (num) => num % 2 === 0;

  const answer = arr.map((num, idx) => {
    return isEven(arr.length) !== isEven(idx) ? num + n : num;
  });

  return answer;
}

// solution([49, 12, 100, 276, 33], 27);
// [ 76, 12, 127, 276, 60 ]
