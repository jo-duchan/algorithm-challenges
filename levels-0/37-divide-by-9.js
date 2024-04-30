// 9로 나눈 나머지

function divideBy9(number) {
  let sum = 0;
  [...number].map((x) => (sum += parseInt(x)));

  return sum % 9;
}

// divideBy9("123");
// 	6
// divideBy9("78720646226947352489");
// 2
