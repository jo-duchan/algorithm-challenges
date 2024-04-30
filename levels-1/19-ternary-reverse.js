// 3진법 뒤집기

function ternaryReverse(n) {
  const ternary = n.toString(3);
  const reverseNum = [...ternary].reverse().join("");

  return parseInt(reverseNum, 3);
}

// ternaryReverse(125);
// 229
