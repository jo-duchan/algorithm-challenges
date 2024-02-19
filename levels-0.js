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

// incrementOrDecrement(-4, 7, true);
// 3
// incrementOrDecrement(-4, 7, false);
// -11

// n의 배수

function multiplesOfNumber(num, n) {
  return num % n === 0 ? 1 : 0;
}

// multiplesOfNumber(98, 2);
// 1
// multiplesOfNumber(34, 3);
// 0

// 문자열을 정수로 변환하기

function StringToInteger(str) {
  return parseInt(str);
}

// StringToInteger("10");
// 10
// StringToInteger("8542");
// 8542

// 덧셈식 출력하기

function additionFormulaOutput(a, b) {
  return `${a} + ${b} = ${a + b}`;
}

// additionFormulaOutput(4, 5);
// 4 + 5 = 9

// n 번째 원소까지

function nTheNthElement(num_list, n) {
  return num_list.slice(0, n);
}

// nTheNthElement([2, 1, 6], 1);
// [2]
// nTheNthElement([5, 2, 1, 7, 5], 3);
// [5, 2, 1]

// 문자열 돌리기

function changeTextVertical(str) {
  let result = "";

  if (str.length === 1) {
    return str[0];
  }

  return result + `${str[0]}\n` + changeTextVertical(str.slice(1));
}

// changeTextVertical("abcd")
// a
// b
// c
// d

// 홀짝 구분하기

function oddAndEven(num) {
  let result = "";
  if (num % 2 === 0) {
    result = `${num} is even`;
  } else {
    result = `${num} is odd`;
  }

  return result;
}

// oddAndEven(100);
// 100 is even
// oddAndEven(1);
// 1 is odd

// 문지열 겹쳐쓰기

function overwrite(str, over_str, n) {
  return str.slice(0, n) + over_str + str.slice(n + over_str.length);
}

// overwrite("He11oWor1d", "lloWorl", 2);
// HelloWorld

// 문자열 섞기

function mixString(str1, str2) {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }

  return result;
}

// mixString("aaaaa", "bbbbb");
// ababababab

// 문자 리스트를 문자열로 변환하기

function returnToStringListString(arr) {
  return arr.join("");
}

// returnToStringListString(["a", "b", "c"]);
// abc

// 문자열 곱하기

function multiplicationOfStrings(str, n) {
  return str.repeat(n);
}

// multiplicationOfStrings("string", 3);
// stringstringstring

// 더 크게 합치기

function returnALargerValue(a, b) {
  return Math.max(parseInt(`${a}${b}`), parseInt(`${b}${a}`));
}

// returnALargerValue(89, 8);
// 898

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

// 홀짝에 따라 다른 값 반환하기

function oddOrEvenValue(n) {
  let result = 0;

  if (n <= 0) {
    return 0;
  }

  if (n % 2 === 0) {
    result += n * n + oddOrEvenValue(n - 2);
  } else {
    result += n + oddOrEvenValue(n - 2);
  }

  return result;
}

// oddOrEvenValue(10);
// 220
// oddOrEvenValue(7);
// 16

// 조건 문자열

function conditionString(ineq, eq, n, m) {
  switch (ineq + eq) {
    case ">=":
      return n >= m ? 1 : 0;
    case "<=":
      return n <= m ? 1 : 0;
    case ">!":
      return n > m ? 1 : 0;
    case "<!":
      return n < m ? 1 : 0;
  }
}

// conditionString("<", "=", 20, 50);
// 1
// conditionString(">", "!", 41, 78);
// 0

// 길이에 따른 연산

function calculationByLength(arr) {
  let result = 0;

  if (arr.length >= 11) {
    arr.map((num) => (result += num));
    return result;
  }

  result = 1;
  arr.map((num) => (result *= num));
  return result;
}

// calculationByLength([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]);
// 51
// calculationByLength([2, 3, 4, 5]);
// 120

// 코드 처리하기

function processCode(code) {
  let ret = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = mode === 1 ? 0 : 1;
    }
    if (code[i] !== "1" && i % 2 === mode) {
      ret += code[i];
    }
  }

  return ret === "" ? "EMPTY" : ret;
}

// processCode("abc1abc1abc");
// acbac

// 등차수열의 특정한 항만 더하기

function addSpecificValuesOnly(a, d, included) {
  let result = 0;
  let ap = [];

  included.map((bool, index) => {
    ap.push(a);
    a += d;

    if (bool) {
      result += ap[index];
    }
  });

  return result;
}

// addSpecificValuesOnly(3, 4, [true, false, false, true, true]);
// 37
// addSpecificValuesOnly(7, 1, [false, false, false, true, false, false, false]);
// 10
