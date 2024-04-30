// flag에 따라 다른 값 반환하기

function incrementOrDecrement(a, b, flag) {
  return flag ? a + b : a - b;
}

// incrementOrDecrement(-4, 7, true);
// 3
// incrementOrDecrement(-4, 7, false);
// -11
