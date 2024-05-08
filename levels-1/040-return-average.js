// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 평균 구하기

function returnAverage(arr) {
  const sum = arr.reduce((acc, cur) => (acc += cur), 0);

  return sum / arr.length;
}

// returnAverage([1, 2, 3, 4]);
// 2.5
