// 문자열 돌리기

function changeTextVertical(str) {
  let result = "";

  if (str.length === 1) {
    return str[0];
  }

  return result + `${str[0]}\n` + changeTextVertical(str.slice(1));
}

// changeTextVertical("abcd")
// a
// b
// c
// d
