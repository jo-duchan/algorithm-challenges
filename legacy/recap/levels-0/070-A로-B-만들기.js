// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
  const count = new Map();

  // before 문자 빈도수 기록
  for (const char of before) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  // after 문자로 비교
  for (const char of after) {
    if (!count.get(char)) {
      return 0;
    }
    count.set(char, count.get(char) - 1);
  }

  return 1;
}

// solution('olleh', 'hello');
// 1
