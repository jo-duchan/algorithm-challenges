// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// 과일 장수

function appleBoxPricing(_, m, score) {
  let totalPrice = 0;
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    if (score.length / (i + m) >= 1) {
      const box = score.slice(i, i + m);
      const price = box[box.length - 1] * m;

      totalPrice += price;
    }
  }

  return totalPrice;
}

// appleBoxPricing(3, 4, [1, 2, 3, 1, 2, 3, 1]);
// 8
// appleBoxPricing(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
// 33
