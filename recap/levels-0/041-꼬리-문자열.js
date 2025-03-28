// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list, ex) {
  const answer = str_list.filter((s) => !s.includes(ex));
  return answer.join('');
}

// solution(['abc', 'def', 'ghi'], 'ef');
// "abcghi"
