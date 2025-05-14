// https://school.programmers.co.kr/learn/courses/30/lessons/181870

function solution(strArr) {
  return strArr.filter((s) => s.includes('ad') !== true);
}

// solution(['and', 'notad', 'abcd']);
// ["and","abcd"]
