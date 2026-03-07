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
