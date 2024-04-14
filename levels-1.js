// 달리기 경주

function racingGame(players, callings) {
  const playersRank = {};

  players.map((name, idx) => {
    playersRank[name] = idx;
  });

  callings.map((call) => {
    const curRank = playersRank[call];
    const rankUp = (rank) => (rank = 0 ? 0 : rank - 1);

    const newRank = players[rankUp(curRank)];
    players[rankUp(curRank)] = players[curRank];
    players[curRank] = newRank;
    playersRank[players[rankUp(curRank)]] = curRank - 1;
    playersRank[players[curRank]] = curRank;
  });

  return players;
}

// racingGame(
//   ["mumu", "soe", "poe", "kai", "mine"],
//   ["kai", "kai", "mine", "mine"]
// );
// [ 'mumu', 'kai', 'mine', 'soe', 'poe' ]

// 가장 많이 받은 선물(2024 KAKAO WINTER INTERNSHIP)

function theMostGiftedGift(friends, gifts) {
  let answer = 0;

  const giftTable = Object.fromEntries(
    friends.map((friend) => [
      friend,
      Object.fromEntries(friends.map((friend) => [friend, 0])),
    ])
  );

  const giftParams = Object.fromEntries(friends.map((friend) => [friend, 0]));

  gifts.forEach((gift) => {
    const [give, take] = gift.split(" ");
    giftParams[give]++;
    giftParams[take]--;
    giftTable[give][take]++;
  });

  friends.forEach((me) => {
    let temp = 0;
    friends.forEach((firend) => {
      const giveNum = giftTable[me][firend];
      const takeNum = giftTable[firend][me];
      if (giveNum > takeNum) temp++;
      if (giveNum === takeNum && giftParams[me] > giftParams[firend]) temp++;
    });
    if (temp > answer) answer = temp;
  });

  return answer;
}

// theMostGiftedGift(
//   ["muzi", "ryan", "frodo", "neo"],
//   [
//     "muzi frodo",
//     "muzi frodo",
//     "ryan muzi",
//     "ryan muzi",
//     "ryan muzi",
//     "frodo muzi",
//     "frodo ryan",
//     "neo muzi",
//   ]
// );
// 2

// 붕대 감기

function bandageGame(bandage, health, attacks) {
  let hp = health;
  let turn = 0;
  let repeat = 0;

  const healing = (cur) => Math.min(cur, health);
  const dealing = new Map(attacks);

  while (turn < attacks[attacks.length - 1][0]) {
    turn++;
    if (dealing.get(turn)) {
      // 공격
      repeat = 0;
      hp = hp - dealing.get(turn);
    } else {
      // 회복
      repeat++;
      let bonus = 0;
      if (repeat === bandage[0]) {
        bonus = bandage[2];
        repeat = 0;
      }
      hp = healing(hp + bandage[1] + bonus);
    }

    if (hp <= 0) break;
  }

  return hp > 0 ? hp : -1;
}

// bandageGame([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]);
// -1
// bandageGame([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]])
// 5

// 추억 점수

function memoriesScore(name, yearning, photo) {
  const matchingData = name.reduce((acc, cur, idx) => {
    return [...acc, [cur, yearning[idx]]];
  }, []);
  const scoreMap = new Map(matchingData);

  const result = photo.reduce((acc, cur) => {
    let score = 0;
    cur.forEach((name) => (score += scoreMap.get(name) ?? 0));

    return [...acc, score];
  }, []);

  return result;
}

// memoriesScore(
//   ["may", "kein", "kain", "radi"],
//   [5, 10, 1, 3],
//   [
//     ["may", "kein", "kain", "radi"],
//     ["may", "kein", "brin", "deny"],
//     ["kon", "kain", "may", "coni"],
//   ]
// );
// [ 19, 15, 6 ]

// 크기가 작은 부분문자열

function substringComparison(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const num = t.slice(i, p.length + i);

    if (parseInt(p) >= parseInt(num)) count++;
  }

  return count;
}

// substringComparison("500220839878", "7");
// 8

// 카드 뭉치

function bunchOfCards(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  let result = "Yes";

  goal.forEach((card) => {
    if (card === cards1[idx1]) {
      idx1++;
      return;
    }

    if (card === cards2[idx2]) {
      idx2++;
      return;
    }

    result = "No";
  });

  return result;
}

// bunchOfCards(
//   ["i", "drink", "water"],
//   ["want", "to"],
//   ["i", "want", "to", "drink", "water"]
// );
// Yes

// 가장 가까운 같은 글자
function theNearestLetter(s) {
  const hash = {};

  const result = [...s].map((v, i) => {
    let afterIdxArr = hash[v] === undefined ? -1 : i - hash[v];
    hash[v] = i;

    return afterIdxArr;
  });

  return result;
}

// theNearestLetter("banana");
// [ -1, -1, -1, 2, 2, 2 ]

// 덧칠하기

function paintOver(n, m, section) {
  let rePainting = 0;
  const arr = Array(n).fill(1);

  section.forEach((x) => (arr[x - 1] = 0));

  arr.forEach((x, i) => {
    if (x === 0) {
      arr.fill(1, i, i + m);
      rePainting++;
    }
  });

  return rePainting;
}
// paintOver(8, 4, [2, 3, 6]);
// 2;
// paintOver(5, 4, [1, 3]);
// 1
// paintOver(6, 1, [1, 3, 5]);
// 3

// 푸드 파이트 대회

function foodFightChallenge(food) {
  const list = food.reduce((acc, food, idx) => {
    if (idx !== 0) {
      const num = Math.floor(food / 2);
      return [...acc, ...Array(num).fill(idx)];
    }

    return acc;
  }, []);

  return [...list, 0, ...list.reverse()].join("");
}

// foodFightChallenge([1, 3, 4, 6]);
// "1223330333221"

// OOO
// OOO
// OSO

// N는 Top
// E는 Right
// S는 Bottom
// W는 Left

// 공원 산책

function walkInThePark(park, routes) {
  const maxRow = park.length;
  const maxCol = park[0].length;

  let row = park.findIndex((x) => x.includes("S"));
  let col = park[row].indexOf("S");

  for (let route of routes) {
    const [direction, gap] = route.split(" ");

    switch (direction) {
      case "N": {
        const to = row - +gap;
        if (to < 0) continue;
        for (let i = row; i >= to; i--) {
          if ((park[i]?.[col] ?? "X") === "X") break;
          if (to === i) row = to;
        }
        break;
      }

      case "E": {
        const to = col + +gap;
        if (to >= maxCol) continue;

        for (let i = col; i <= to; i++) {
          if ((park[row]?.[i] ?? "X") === "X") break;
          if (to === i) col = to;
        }
        break;
      }

      case "S": {
        const to = row + +gap;
        console.log(row, +gap);
        if (to >= maxRow) continue;
        for (let i = row; i <= to; i++) {
          if ((park[i]?.[col] ?? "X") === "X") break;
          if (to === i) row = to;
        }
        break;
      }

      case "W": {
        const to = col - +gap;
        if (to < 0) continue;
        for (let i = col; i >= to; i--) {
          if ((park[row]?.[i] ?? "X") === "X") break;
          if (to === i) col = to;
        }
        break;
      }
    }
  }

  return [row, col];
}

// walkInThePark(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]);
// [0,0]
// walkInThePark(["OOSOX", "OOOOO", "OOOOO"], ["E 1"]);
// [0, 3]
// walkInThePark(["OOO", "OSO", "OOO", "OOO"], ["N 2", "S 2"]);
// [3, 1]
// walkInThePark(["OXX", "XSO", "XOO"], ["E 1", "S 1"]);
// [2, 2]

// 나머지가 1이 되는 수 찾기

function alwaysOneLeft(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) return i;
  }
}

// alwaysOneLeft(10);
// 3

// 명예의 전당

function topRankList(k, score) {
  const result = [];

  score.reduce((list, cur) => {
    if (list.length === k && list[0] < cur) {
      list[0] = cur;
    }

    if (list.length < k) {
      list.push(cur);
    }

    list.sort((a, b) => a - b);
    result.push(list[0]);

    return list;
  }, []);

  return result;
}

// topRankList(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);
// [0, 0, 0, 0, 20, 40, 70, 70, 150, 300];

// 삼총사

function threesome(num) {
  let result = 0;

  const recursive = (cur, init) => {
    if (cur.length === 3) {
      result += cur.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
    }

    for (let i = init; i < num.length; i++) {
      recursive([...cur, num[i]], i + 1);
    }
  };

  recursive([], 0);

  return result;
}

// threesome([-2, 3, 0, 2, -5]);
// 2

// 숫자놀이

function aGameOfNumbers(str) {
  const checklist = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const result = checklist.reduce((acc, num, idx) => {
    return acc.replaceAll(num, idx);
  }, str);

  return parseInt(result);
}

// aGameOfNumbers("one4seveneight");
// 1478

// 부족한 금액 계산하기

function priceCalculator(price, money, count) {
  // 가우스 공식을 사용한 예시
  // const tmp = price * count * (count + 1) / 2 - money;
  //   return tmp > 0 ? tmp : 0;
  let increment = 0;

  for (let i = 1; i <= count; i++) {
    increment += price * i;
  }

  return increment > 0 ? increment - money : 0;
}

// priceCalculator(3, 20, 4);
// 10

// 없는 숫자 더하기
function addAnEmptyNumber(num) {
  // 등차수열의 합
  const arithmeticSeries = (9 * (9 + 1)) / 2;
  const result = num.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);

  return arithmeticSeries - result;
}

// addAnEmptyNumber([5, 8, 4, 0, 6, 7, 9])
// 6

// 내적

function innerProduct(a, b) {
  const result = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);

  return result;
}

// innerProduct([1, 2, 3, 4], [-3, -1, 0, 2]);
// 3

// 콜라 문제

function cokeProblem(a, b, n) {
  function exchange(num) {
    if (num < a) return 0;

    const remainder = num % a;
    const giveBack = ((num - remainder) / a) * b;

    return giveBack + exchange(remainder + giveBack);
  }

  return exchange(n);
}

cokeProblem(3, 1, 20);

// 3진법 뒤집기

function ternaryReverse(n) {
  const ternary = n.toString(3);
  const reverseNum = [...ternary].reverse().join("");

  return parseInt(reverseNum, 3);
}

// ternaryReverse(125);
// 229

// 두 개 뽑아서 더하기

function addTwoNumbers(numbers) {
  const sumNums = [];
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sumNums.push(numbers[i] + numbers[j]);
    }
  }

  result = [...new Set(sumNums)].sort((a, b) => a - b);

  return result;
}

// addTwoNumbers([2, 1, 3, 4, 1]);
// [ 2, 3, 4, 5, 6, 7 ]

// 최소 직사각형

function minimumRectangle(sizes) {
  let maxSize = [0, 0];
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
}

// minimumRectangle([
//   [20, 10],
//   [12, 18],
// ]);
// 240

// 대충 만든 자판

function typing(keymap, targets) {
  let newKeys = new Map();

  keymap.forEach((keys) => {
    [...keys].forEach((key, idx) => {
      const count = idx + 1;
      if (newKeys.has(key)) {
        newKeys.get(key) > count ? newKeys.set(key, count) : null;
      } else {
        newKeys.set(key, count);
      }
    });
  });

  const result = targets.map((str) => {
    let sum = 0;

    for (let x of str) {
      if (!newKeys.has(x)) return -1;
      sum += +newKeys.get(x);
    }

    return sum;
  });

  return result;
}

// typing(["ABCE"], ["ABDE"]);
// -1

// 제일 작은 수 제거

function removeMinNumber(arr) {
  const smallest = Math.min(...arr);
  const result = arr.filter((num) => num > smallest);

  if (result.length === 0) {
    return [-1];
  }

  return result;
}
// removeMinNumber([4, 3, 2, 1]);
// [4, 3, 2]
// removeMinNumber([5]);
// [ -1 ]

// 둘만의 암호

function secretCode(s, skip, index) {
  const skipMap = new Map();

  [...skip].forEach((x) => skipMap.set(x.charCodeAt(), x));
  const getIndex = (num) => ((num - 97) % 26) + 97;

  const result = [...s].reduce((acc, cur) => {
    const curASCII = cur.charCodeAt();
    let count = index;

    for (let i = 1; i <= count; i++) {
      if (skipMap.get(getIndex(i + curASCII))) count++;
    }

    return (acc += String.fromCharCode(getIndex(curASCII + count)));
  }, "");

  console.log(result);
  return result;
}

// secretCode("aukks", "wbqd", 5);
// happy
// secretCode("zzzzz", "abcdefghijklmnopqrstuvwxy", 6);
// zzzzz

// 약수의 개수와 덧셈

function numberAndSum(left, right) {
  let result = 0;

  const getDivisor = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
    }
    return count;
  };

  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 약수의 갯수가 홀수
    // Number.isInteger(Math.sqrt(i))
    if (getDivisor(i) % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }

  return result;
}

// numberAndSum(13, 17);
// 43

// 음양 더하기

function numberPlusAndMinus(absolutes, signs) {
  const result = absolutes.reduce((acc, cur, idx) => {
    if (signs[idx]) {
      return (acc += cur);
    }

    return (acc -= cur);
  }, 0);

  return result;
}

numberPlusAndMinus([4, 7, 12], [true, false, true]);

// 신규 아이디 추천(2021 KAKAO BLIND RECRUITMENT)

function recommendNewID(new_id) {
  // 길이는 3자 이상 15자 이하여야 합니다.
  // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
  // 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

  // step01
  let recommendId = new_id.toLowerCase();

  // // step02
  recommendId = recommendId.replace(/[^\-|_|.|a-z|0-9]+/g, "");

  // // step03
  recommendId = recommendId.replaceAll(/\.+/g, ".");

  // // step04
  recommendId = recommendId.replace(/^\.|\.$/g, "");

  // step05
  recommendId = recommendId.padEnd(1, "a");

  // step06
  recommendId = recommendId.slice(0, 15).replace(/^\.|\.$/g, "");

  // step07
  recommendId = recommendId.padEnd(3, recommendId[recommendId.length - 1]);

  return recommendId;
}

// recommendNewID("...!@BaT#*..y.abcdefghijklm");
// bat.y.abcdefghi

// recommendNewID("z-+.^.");
// z--

// K번째 수

function theKthNumber(array, commands) {
  const result = commands.reduce((acc, cur) => {
    const [i, j, k] = cur;
    const arr = array.slice(i - 1, j).sort((a, b) => a - b);

    return [...acc, arr[k - 1]];
  }, []);

  return result;
}

// theKthNumber(
//   [1, 5, 2, 6, 3, 7, 4],
//   [
//     [2, 5, 3],
//     [4, 4, 1],
//     [1, 7, 3],
//   ]
// );
// [ 5, 6, 3 ]

//

// 예산 Summer/Winter Coding(~2018)

function budgetDivision(d, budget) {
  const result = d
    .sort((a, b) => a - b)
    .reduce((acc, cur) => acc + Number((budget -= cur) >= 0), 0);

  return result;
}

// budgetDivision([1, 3, 2, 5, 4], 9);
// 3
// budgetDivision([2, 2, 3, 3], 10);
// 4
