// 수 조작하기 2

function numberControl2(numLog) {
  const control = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  const result = [];

  for (let i = 0; i < numLog.length; i++) {
    if (i === 0) continue;

    result.push(control[(numLog[i] - numLog[i - 1]).toString()]);
  }

  return result.join("");
}

// numberControl2([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
// wsdawsdassw
