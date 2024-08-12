// https://school.programmers.co.kr/learn/courses/30/lessons/181866

function solution(myString) {
  const answer = myString
    .split("x")
    .filter((x) => x !== "")
    .sort();

  return answer;
}

// solution("dxccxbbbxaaaa");
// 'aaaa', 'bbb', 'cc', 'd' ]
