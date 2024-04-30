// 홀짝 구분하기

function oddAndEven(num) {
  let result = "";
  if (num % 2 === 0) {
    result = `${num} is even`;
  } else {
    result = `${num} is odd`;
  }

  return result;
}

// oddAndEven(100);
// 100 is even
// oddAndEven(1);
// 1 is odd
