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
