// n의 배수

function multiplesOfNumber(num, n) {
  return num % n === 0 ? 1 : 0;
}

// multiplesOfNumber(98, 2);
// 1
// multiplesOfNumber(34, 3);
// 0
