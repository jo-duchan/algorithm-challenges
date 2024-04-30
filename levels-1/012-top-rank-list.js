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
