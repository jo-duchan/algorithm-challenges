// 크기가 작은 부분문자열

function substringComparison(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const num = t.slice(i, p.length + i);

    if (parseInt(p) >= parseInt(num)) count++;
  }

  return count;
}

// substringComparison("500220839878", "7");
// 8
