// 두 수의 연산값 비교하기

function comparisonOfCalculationValues(a, b) {
  const answer1 = parseInt(`${a}${b}`);
  const answer2 = 2 * a * b;

  if (answer1 === answer2) {
    return answer1;
  }

  return answer1 < answer2 ? answer2 : answer1;
}

// comparisonOfCalculationValues(91, 2);
// 912
