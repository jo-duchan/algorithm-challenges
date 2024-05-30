// https://school.programmers.co.kr/learn/courses/30/lessons/12916
// 문자열 내 p와 y의 개수

function characterComparison(s) {
  const [countP, countY] = [...s].reduce(
    ([p, y], cur) => {
      const convert = cur.toLowerCase();
      if (convert === "p") p++;
      if (convert === "y") y++;

      return [p, y];
    },
    [0, 0]
  );

  return countP === countY;
}

// characterComparison("pPoooyY");
// true
