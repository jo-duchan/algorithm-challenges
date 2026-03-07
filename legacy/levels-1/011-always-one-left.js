// 나머지가 1이 되는 수 찾기

function alwaysOneLeft(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) return i;
  }
}

// alwaysOneLeft(10);
// 3
