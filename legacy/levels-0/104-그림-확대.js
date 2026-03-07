// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture, k) {
  const tempArr = [];

  for (let arr of picture) {
    for (let i = 0; i < k; i++) {
      tempArr.push(arr);
    }
  }

  const answer = tempArr.map((x) => {
    return [...x].map((y) => y.repeat(k)).join("");
  });

  return answer;
}

solution(["x.x", ".x.", "x.x"], 3);
