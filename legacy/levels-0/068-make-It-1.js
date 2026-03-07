// 1로 만들기

function makeIt1(list) {
  let count = 0;

  const calculate = (num) => {
    while (num > 1) {
      count++;
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = (num - 1) / 2;
      }
    }
  };

  list.forEach((num) => calculate(num));

  return count;
}

// makeIt1([12, 4, 15, 1, 14]);
// 11
