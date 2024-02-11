// 문자열 반복해서 출력하기

function stringRepeatOutput(str, n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += str;
  }

  return result;
}

// stringRepeatOutput("string", 5);
// stringstringstringstringstring

// flag에 따라 다른 값 반환하기

function incrementOrDecrement(a, b, flag) {
  return flag ? a + b : a - b;
}

// incrementOrDecrement(-4, 7, true)
// 3
// incrementOrDecrement(-4, 7, false)
// -11

// n의 배수

function multiplesOfNumber(num, n) {
  return num % n === 0 ? 1 : 0;
}

// multiplesOfNumber(98, 2)
// 1
// multiplesOfNumber(34, 3)
// 0
