// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  const answer = my_string.split("");

  // 구조 분해 할당 활용
  [answer[num1], answer[num2]] = [answer[num2], answer[num1]];

  return answer.join("");
}

// solution("hello", 1, 2);
// hlelo
