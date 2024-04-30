// 주사위 게임 2

function diceGame2(a, b, c) {
  let arr = [a, b, c];

  const comparison = (acc, cur, idx, src) => {
    src.map((val, i) => {
      if (idx !== i && val === cur) {
        acc += 1;
      }
    });
    return acc;
  };

  const result = arr.reduce(comparison, 0);

  if (result === 0) {
    return a + b + c;
  }

  if (0 < result && result < 6) {
    return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
  }

  if (result === 6) {
    return (
      (a + b + c) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    );
  }
}
// diceGame2(2, 6, 1);
// 9
// diceGame2(5, 3, 3);
// 473
// diceGame2(4, 4, 4);
// 110592
