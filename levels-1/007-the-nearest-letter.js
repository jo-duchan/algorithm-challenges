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
