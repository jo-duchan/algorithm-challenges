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
