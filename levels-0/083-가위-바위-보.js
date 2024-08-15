// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  const temp = {
    2: "0",
    0: "5",
    5: "2",
  };

  const answer = [...rsp].map((x) => temp[x]).join("");
  return answer;
}

// solution("205");
// "052"
