// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const arr = s.split(" ");
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);

  return `${minNumber} ${maxNumber}`;
}

solution("1 2 3 4");
