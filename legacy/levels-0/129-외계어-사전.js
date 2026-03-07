// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  const sortedSpell = spell.sort().join("");

  for (let i of dic) {
    let sortedDic = [...i].sort().join("");

    if (sortedDic === sortedSpell) {
      return 1;
    }
  }

  return 2;
}

// solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]);
// 1
