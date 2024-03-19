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
