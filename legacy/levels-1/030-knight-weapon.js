// 기사단원의 무기

function knightWeapon(number, limit, power) {
  const weapon = new Array(number).fill(0);

  for (let i = 1; i <= number; i++) {
    // A = a * b 라고 가정했을 경우, a와 b 모두 Math.sqrt(A)보다 클 수 없으므로,
    // a와 b의 곱으로 이루어진 A는 Math.sqrt(A)까지만 확인해도 약수를 구할 수 있다.
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0 && j === i / j) {
        weapon[i - 1]++;
      }
      if (i % j === 0 && j !== i / j) {
        weapon[i - 1] += 2;
      }
    }
  }

  const result = weapon.reduce((acc, cur) => {
    if (cur > limit) {
      return (acc += power);
    }
    return (acc += cur);
  }, 0);

  return result;
}

// knightWeapon(5, 3, 2);
// 10
