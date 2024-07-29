// https://school.programmers.co.kr/learn/courses/30/lessons/17682
// [1차] 다트 게임

function solution(dartResult) {
  const options = { S: 1, D: 2, T: 3, "*": 2, "#": -1 };
  let scores = [];
  let answer = [];

  while (dartResult.length) {
    const current = parseInt(dartResult);
    const length = current ? current.toString().length : 1;

    if (Number.isInteger(current)) {
      scores.push([current]);
    } else {
      scores[scores.length - 1].push(dartResult[0]);
    }

    dartResult = dartResult.slice(length);
  }

  for (let i = 0; i < scores.length; i++) {
    const [score, power, option] = scores[i];
    let currentScore = Math.pow(score, options[power] || 0);

    if (option) {
      currentScore *= options[option];
      if (option === "*") answer[i - 1] *= 2;
    }

    answer.push(currentScore);
  }

  return answer.reduce((acc, cur) => (acc += cur));
}

// solution("10T#1T*2D*");
// 1988
