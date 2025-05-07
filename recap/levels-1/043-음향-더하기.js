// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, idx) => {
    const sign = signs[idx] ? 1 : -1;
    return acc + cur * sign;
  }, 0);

  return answer;
}

// solution([4, 7, 12], [true, false, true]);
// 9
