// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString, pat) {
  let answer = 0;

  for (let i = 0; i < myString.length; i++) {
    if (myString.slice(i).startsWith(pat)) {
      answer++;
    }
  }

  return answer;
}

// solution("banana", "ana");
// 2
