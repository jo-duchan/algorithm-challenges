// https://school.programmers.co.kr/learn/courses/30/lessons/12912
// 두 정수 사이의 합

// 가우스 - 등차수열의 합을 이용할 수도 있다.
// 등차수열의 합 = ((첫 항 + 마지막 항) * 항의 게수) / 2

function sumBetweenTwoIntegers(a, b) {
  const minNumber = Math.min(a, b);
  const maxNumber = Math.max(a, b);
  let result = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    result += i;
  }

  return result;
}

// sumBetweenTwoIntegers(3, 5);
// 12
