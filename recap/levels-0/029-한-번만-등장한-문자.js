// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    obj[char] = (obj[char] || 0) + 1;
  }

  const answer = Object.keys(obj)
    .filter((k) => obj[k] === 1)
    .sort()
    .join('');

  return answer.length !== 0 ? answer : [];
}

// solution('hello');
// eho
