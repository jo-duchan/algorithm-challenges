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
