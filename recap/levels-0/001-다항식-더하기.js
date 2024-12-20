// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  const answer = [];
  const valueArr = polynomial.split(" + ");
  const sumArr = valueArr.reduce(
    (acc, cur) => {
      if (cur.at(-1) === "x") {
        acc[0] = acc[0] + Number(cur.replace("x", "") || 1);
      } else {
        acc[1] = acc[1] + Number(cur);
      }

      return acc;
    },
    [0, 0]
  );

  if (sumArr[0]) {
    const temp = `${sumArr[0] === 1 ? "" : sumArr[0]}x`;
    answer.push(temp);
  }

  if (sumArr[1]) {
    answer.push(sumArr[1]);
  }

  return answer.join(" + ");
}

// solution("3x + 7 + x")
// 4x + 7
