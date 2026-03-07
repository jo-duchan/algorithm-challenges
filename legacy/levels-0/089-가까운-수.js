// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  let answer = array[0];
  let diff = n;

  for (let num of array) {
    const temp = Math.abs(num - n);

    if (temp < diff || (temp === diff && num < answer)) {
      diff = temp;
      answer = num;
    }
  }

  return answer;
}

// solution([2, 3, 4], 1);
// 2
