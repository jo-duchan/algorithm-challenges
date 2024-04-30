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
