// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  let answer = 0;

  const counter = (curString) => {
    let temp = 0;
    for (let x = 0; x < curString.length; x++) {
      if (curString[x] === `${k}`) temp++;
    }
    return temp;
  };

  for (let x = i; x <= j; x++) {
    const cur = `${x}`;
    if (cur.includes(`${k}`)) {
      answer += counter(cur);
    }
  }

  return answer;
}

// solution(1, 13, 1);
// 6
