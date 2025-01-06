// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  const sortedSumSpell = spell.sort().join("");

  for (let i of dic) {
    if (i.length !== sortedSumSpell.length) {
      continue;
    }

    let tempSpell = [...i].sort().join("");

    if (sortedSumSpell === tempSpell) {
      return 1;
    }
  }

  return 2;
}

// solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]);
// 1
