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

// 주사위 게임 2

function diceGame2(a, b, c) {
  let arr = [a, b, c];

  const comparison = (acc, cur, idx, src) => {
    src.map((val, i) => {
      if (idx !== i && val === cur) {
        acc += 1;
      }
    });
    return acc;
  };

  const result = arr.reduce(comparison, 0);

  if (result === 0) {
    return a + b + c;
  }

  if (0 < result && result < 6) {
    return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
  }

  if (result === 6) {
    return (
      (a + b + c) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    );
  }
}
// diceGame2(2, 6, 1);
// 9
// diceGame2(5, 3, 3);
// 473
// diceGame2(4, 4, 4);
// 110592

// 원소들의 곱과 합

function multiplicationAndSumOfSquares(num_list) {
  let sum = 0;
  let multi = 1;

  num_list.map((num) => {
    sum += num;
    multi *= num;
  });

  return Math.pow(sum, 2) > multi ? 1 : 0;
}

// multiplicationAndSumOfSquares([5, 7, 8, 3]);
// 0

// 이어 붙인 수

function connectNumber(num_list) {
  const { oddStr, evenStr } = num_list.reduce(
    ({ oddStr, evenStr }, cur) => {
      cur % 2 === 0 ? (oddStr += cur.toString()) : (evenStr += cur.toString());

      return { oddStr, evenStr };
    },
    { oddStr: "", evenStr: "" }
  );

  return parseInt(oddStr) + parseInt(evenStr);
}

// connectNumber([3, 4, 5, 2, 1]);
// 393

// 마지막 두 원소

function lastTwoNumbers(num_list) {
  const lastTo2ndNum = num_list[num_list.length - 2];
  const lastNum = num_list[num_list.length - 1];
  const addNum = lastNum > lastTo2ndNum ? lastNum - lastTo2ndNum : lastNum * 2;

  return [...num_list, addNum];
}

// lastTwoNumbers([2, 1, 6]);
// [ 2, 1, 6, 5 ]
// lastTwoNumbers([5, 2, 1, 7, 5]);
// [ 5, 2, 1, 7, 5, 10 ]

// 수 조작하기 1

function numberControl(n, control) {
  let result = n;
  [...control].map((str) => {
    switch (str) {
      case "w":
        result += 1;
        return;
      case "s":
        result -= 1;
        return;
      case "d":
        result += 10;
        return;
      case "a":
        result -= 10;
        return;
    }
  });

  return result;
}

// numberControl(0, "wsdawsdassw");
// -1

// 수 조작하기 2

function numberControl2(numLog) {
  const control = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  const result = [];

  for (let i = 0; i < numLog.length; i++) {
    if (i === 0) continue;

    result.push(control[(numLog[i] - numLog[i - 1]).toString()]);
  }

  return result.join("");
}

// numberControl2([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
// wsdawsdassw

// 포켓몬

function pickingPokemon(list) {
  const max = list.length / 2;
  const pick = new Set(list);

  return pick.size > max ? max : pick.size;
}

// pickingPokemon([3, 1, 2, 3]);
// 2
// pickingPokemon([3, 3, 3, 2, 2, 4]);
// 3

function sequenceAndIntervalQuery3(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}

// sequenceAndIntervalQuery3(
//   [0, 1, 2, 3, 4],
//   [
//     [0, 3],
//     [1, 2],
//     [1, 4],
//   ]
// );

// [3, 4, 1, 0, 2]

// 수열과 구간 쿼리 2

function sequenceAndIntervalQuery2(arr, queries) {
  const result = [];

  queries.map(([s, e, k]) => {
    const convert = arr
      .filter((n, i) => s <= i && i <= e && k < n)
      .sort((a, b) => a - b);

    result.push(convert[0] ? convert[0] : -1);
  });

  return result;
}

// sequenceAndIntervalQuery2([0, 3, 1, 2, 4, 5, 6], [[2, 5, 2]]);
// [ 4 ]
// sequenceAndIntervalQuery2([0, 1, 2, 4, 3], [[0, 4, 2], [0, 3, 2], [0, 2, 2]]);
// [3, 4, -1]

// 수열과 구간 쿼리 4

function sequenceAndIntervalQuery4(arr, queries) {
  queries.map(([s, e, k]) => {
    arr = arr.map((n, i) => {
      if (s <= i && i <= e && i % k === 0) {
        return ++n;
      }
      return n;
    });
  });

  return arr;
}

// sequenceAndIntervalQuery4([0, 1, 2, 4, 3],[[0, 4, 1],[0, 3, 2],[0, 3, 3],]);
// [ 3, 2, 4, 6, 4 ]

// 문자열로 변환

function convertString(n) {
  return n.toString();
}

// convertString(123);
// 123

// 배열 만들기 2

function createArrays(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if (/^[05]+$/.test(i)) {
      result.push(i);
    }
  }

  return result.length <= 0 ? [-1] : result;
}

// createArrays(5, 5005);
// [5, 50, 55, 500, 505, 550, 555]

// 카운트 업

function countUp(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

// countUp(3, 10);
// [3, 4, 5, 6, 7, 8, 9, 10]

// 콜라츠 수열 만들기

function collatzSequence(n, arr = []) {
  arr.push(n);

  if (n === 1) {
    return arr;
  }

  if (n % 2 === 0) {
    return collatzSequence(n / 2, arr);
  }

  return collatzSequence(3 * n + 1, arr);
}

collatzSequence(10);
// [10, 5, 16, 8, 4, 2, 1]

// 배열 만들기 4

function createArrays4(arr) {
  let i = 0;
  const stk = [];

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    }

    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    }

    if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
}

// createArrays4([1, 4, 2, 5, 3]);
// [ 1, 2, 3 ]

// 간단한 논리 연산

function simpleLogicalOperation(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

// simpleLogicalOperation(false, true, true, true);
// true
// simpleLogicalOperation(true, false, false, false);
// false

// 주사위 게임 3

function count(arr) {
  const counter = new Map();
  for (const data of arr) {
    counter.set(data, (counter.get(data) || 0) + 1);
  }

  const sortedByCnt = [...counter.keys()].sort(
    (a, b) => counter.get(b) - counter.get(a)
  );
  const maxCnt = Math.max(...counter.values());

  return [sortedByCnt, maxCnt];
}

function diceGame3(a, b, c, d) {
  const [arr, maxCnt] = count([a, b, c, d]);
  const [p, q, r, s] = arr;

  if (arr.length === 1) {
    return p * 1111;
  }

  if (arr.length === 2) {
    return maxCnt === 2 ? (p + q) * Math.abs(p - q) : Math.pow(10 * p + q, 2);
  }

  if (arr.length === 3) {
    return q * r;
  }

  return Math.min(p, q, r, s);
}

// diceGame3(2, 2, 2, 2);
// 2222
// diceGame3(4, 1, 4, 4);
// 1681
// diceGame3(6, 3, 3, 6);
// 27
// diceGame3(2, 5, 2, 6);
// 30

// 글자 이어 붙여 문자열 만들기

function makSentences(my_string, index_list) {
  let result = "";

  index_list.forEach((s) => {
    result += my_string[s];
  });

  return result;
}

// makSentences("zpiaz", [1, 2, 0, 0, 3]);
// pizza

// 9로 나눈 나머지

function divideBy9(number) {
  let sum = 0;
  [...number].map((x) => (sum += parseInt(x)));

  return sum % 9;
}

// divideBy9("123");
// 	6
// divideBy9("78720646226947352489");
// 2

// 문자열 여러 번 뒤집기

function flipTheString(string, queries) {
  const result = queries.reduce((string, [s, e]) => {
    let arr = [...string];
    const newString = arr.slice(s, e + 1).reverse();
    arr.splice(s, newString.length, ...newString);

    return arr.join("");
  }, string);

  return result;
}

// flipTheString("rermgorpsam", [
//   [2, 3],
//   [0, 7],
//   [5, 9],
//   [6, 10],
// ]);
// programmers

// 배열 만들기 5

function createArrays5(intStrs, k, s, l) {
  const result = intStrs.reduce((arr, cur) => {
    const clipNum = parseInt(cur.slice(s, s + l));

    return k < clipNum ? [...arr, clipNum] : arr;
  }, []);

  return result;
}

// createArrays5(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5);
// [ 56789, 99999 ]

// 부분 문자열 이어 붙여 문자열 만들기

function toAttachPieceOfString(str_arr, parts) {
  const result = parts.reduce((str, [s, e], idx) => {
    const clipStr = str_arr[idx].slice(s, e + 1);

    return (str += clipStr);
  }, "");

  return result;
}

// toAttachPieceOfString(
//   ["progressive", "hamburger", "hammer", "ahocorasick"],
//   [
//     [0, 4],
//     [1, 2],
//     [3, 5],
//     [7, 7],
//   ]
// );
// programmers

// 문자열의 뒤의 n글자

function nthFromTheBack(string, n) {
  return string.slice(-n);
}

// nthFromTheBack("He110W0r1d", 5);
// W0r1d

// 접미사 배열

function suffixArray(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string.slice(-i));
  }

  return result.sort();
}

// suffixArray("banana");
// [ 'a', 'ana', 'anana', 'banana', 'na', 'nana' ]

// 접미사인지 확인하기

function suffixCheck(string, suffix) {
  return string.endsWith(suffix) ? 1 : 0;
}

// suffixCheck("banana", "ana");
// 1

// 접두사인지 확인하기

function prefixCheck(string, prefix) {
  return string.startsWith(prefix) ? 1 : 0;
}

prefixCheck("banana", "nan");

// 문자열 뒤집기

function flipTheString2(string, s, e) {
  const arry = Array.from(string);
  const flipString = arry.slice(s, e + 1).reverse();
  arry.splice(s, flipString.length, ...flipString);

  return arry.join("");
}

flipTheString2("Progra21Sremm3", 6, 12);
// ProgrammerS123

// qr code

function qrcode(q, r, code) {
  const result = Array.from(code).reduce((acc, cur, idx) => {
    return idx % q === r ? acc + cur : acc;
  }, "");

  return result;
}

qrcode(3, 1, "qjnwezgrpirldywt");
// jerry

// 세로 읽기

function verticalRead(string, m, c) {
  const result = Array.from(string)
    .filter((_, i) => (i % m) + 1 === c)
    .join("");

  return result;
}

// verticalRead("ihrhbakrfpndopljhygc", 4, 2);
// happy
// verticalRead("programmers", 1, 1);
// programmers

// 문자 개수 세기

function theNumberOfLetters(string) {
  const alphabet = Array(52).fill(0);

  Array.from(string).forEach((x, idx) => {
    const charCode = string.charCodeAt(idx);

    if (charCode >= 65 && charCode <= 90) {
      alphabet[charCode - 65] += 1;
    }

    if (charCode >= 97 && charCode <= 122) {
      alphabet[charCode - 97 + 26] += 1;
    }
  });

  return alphabet;
}

// theNumberOfLetters("Programmers");
// [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0,
// ];

// 배열 만들기 1

function createArray1(n, k) {
  let array = [];

  for (let i = k; i <= n; i += k) {
    array.push(i);
  }

  return array;
}

// createArray1(15, 5);
// [ 5, 10, 15 ]

// 글자 지우기

function removeString(string, indices) {
  let result = "";

  Array.from(string).forEach((x, i) => {
    result += indices.includes(i) ? "" : x;
  });

  return result;
}

// removeString("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]);
// programmers

// 카운트 다운

function countDown(start, end) {
  const result = [];

  for (let i = start; i >= end; i--) {
    result.push(i);
  }

  return result;
}

// countDown(10, 3);
// [3, 4, 5, 6, 7, 8, 9, 10];

// 가까운 1 찾기

function findACloseOne(arr, idx) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && idx <= i) {
      return i;
    }
  }

  return -1;
}

// findACloseOne([1, 0, 0, 1, 0, 0], 4);
// -1
// findACloseOne([1, 1, 1, 1, 0], 3);
// 3

// 리스트 자르기

function listSlicer(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}

// listSlicer(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// [ 2, 3, 4, 5, 6 ]
// listSlicer(4, [2, 7, 3], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// [ 2, 5 ]

// 첫 번째로 나오는 음수

function firstNegativeNumber(list) {
  return list.findIndex((x) => x < 0);
}

// firstNegativeNumber([12, 4, 15, 46, 38, -2, 15]);
// 5

// 배열 만들기 3

function createArray3(arr, intervals) {
  const result = intervals.reduce((acc, [start, end]) => {
    return [...acc, ...arr.slice(start, end + 1)];
  }, []);

  return result;
}

// createArray3(
//   [1, 2, 3, 4, 5],
//   [
//     [1, 3],
//     [0, 4],
//   ]
// );
// [2, 3, 4, 1, 2, 3, 4, 5];

// 2의 영역

function theDomainOfTwo(arr) {
  const begin = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return begin === -1 ? [begin] : arr.slice(begin, end + 1);
}

// theDomainOfTwo([1, 2, 1]);
// [ 2 ]

// 배열 조각내기

function arrayCarve(arr, query) {
  const result = query.reduce((acc, cur, idx) => {
    if (idx % 2) {
      acc = acc.slice(cur, arr.length);
    } else {
      acc = acc.slice(0, cur + 1);
    }

    return acc;
  }, arr);

  return result;
}

// arrayCarve([0, 1, 2, 3, 4, 5], [4, 1, 2]);
// [ 1, 2, 3 ]

// n번째 원소부터

function fromTheNth(num_list, n) {
  return num_list.filter((x, i) => i + 1 >= n);
}

// fromTheNth([5, 2, 1, 7, 5], 2);
// [ 2, 1, 7, 5 ]

// 순서 바꾸기

function orderChange(list, n) {
  return [...list.slice(n), ...list.slice(0, n)];
}

// orderChange([2, 1, 6], 1);
// [ 1, 6, 2 ]

// n개 간격의 원소들

function nGapNumbers(list, n) {
  const result = list.filter((_, i) => !(i % n));

  return result;
}
// nGapNumbers([4, 2, 6, 1, 7, 6], 2);
// [ 4, 6, 7 ]

// 왼쪽 오른쪽

function leftOrRight(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "l") {
      return list.slice(0, i);
    }

    if (list[i] === "r") {
      return list.slice(i + 1);
    }
  }

  return [];
}

// leftOrRight(["u", "u", "l", "r"]);
// [ 'u', 'u' ]

// 홀수 vs 짝수

function oddVersusEven(list) {
  const result = list.reduce(
    ([even, odd], cur, idx) => {
      if (idx % 2 === 0) {
        even += cur;
      } else {
        odd += cur;
      }
      return [even, odd];
    },
    [0, 0]
  );

  return Math.max(...result);
}

// oddVersusEven([4, 2, 6, 1, 7, 6]);
// 17

// 5명씩

function fivePeopleEach(names) {
  const result = [];

  for (let i = 0; i < names.length; i += 5) {
    result.push(names[i]);
  }

  return result;
}

// fivePeopleEach(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]);
// ["nami", "vex"];

// 할 일 목록

function todoList(list, finished) {
  const result = list.filter((_, i) => !finished[i]);
  return result;
}

// todoList(
//   ["problemsolving", "practiceguitar", "swim", "studygraph"],
//   [true, false, true, false]
// );

// n보다 커질 때까지 더하기

function createLargerNumber(numbers, n) {
  const result = numbers.reduce(
    (acc, cur) => (acc > n ? acc : (acc += cur)),
    0
  );
  return result;
}

// createLargerNumber([34, 5, 71, 29, 100, 34], 123);
// 139

// 수열과 구간 쿼리 1

function sectionQueries1(arr, queries) {
  queries.forEach((querie) => {
    const [s, e] = querie;

    arr.forEach((_, i) => {
      if (s <= i && i <= e) {
        arr[i]++;
      }
    });
  });

  return arr;
}

// sectionQueries1(
//   [0, 1, 2, 3, 4],
//   [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//   ]
// );
// [ 1, 3, 4, 4, 4 ]

// 조건에 맞게 수열 변환하기 1

function convertSequenceOfNumber(arr) {
  const result = arr.map((x) => {
    if (50 <= x && x % 2 === 0) {
      return x / 2;
    }

    if (50 > x && x % 2 !== 0) {
      return x * 2;
    }
    return x;
  });
  return result;
}

// convertSequenceOfNumber([1, 2, 3, 100, 99, 98]);
// [ 2, 2, 6, 50, 99, 49 ]
