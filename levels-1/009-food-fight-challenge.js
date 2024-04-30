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
