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
