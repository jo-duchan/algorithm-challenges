// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// 최댓값과 최솟값

function ReturnMinimumAndMaximumValues(s) {
  const convertIntegerArr = s.split(" ").map((string) => parseInt(string));
  const minimum = Math.min(...convertIntegerArr);
  const maximum = Math.max(...convertIntegerArr);

  return `${minimum} ${maximum}`;
}

// ReturnMinimumAndMaximumValues("1 2 3 4");
// 1 4
