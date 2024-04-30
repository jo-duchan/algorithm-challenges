// 첫 번째로 나오는 음수

function firstNegativeNumber(list) {
  return list.findIndex((x) => x < 0);
}

// firstNegativeNumber([12, 4, 15, 46, 38, -2, 15]);
// 5
