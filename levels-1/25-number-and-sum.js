// 약수의 개수와 덧셈

function numberAndSum(left, right) {
  let result = 0;

  const getDivisor = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
    }
    return count;
  };

  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 약수의 갯수가 홀수
    // Number.isInteger(Math.sqrt(i))
    if (getDivisor(i) % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }

  return result;
}

// numberAndSum(13, 17);
// 43
