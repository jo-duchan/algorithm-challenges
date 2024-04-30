// 글자 지우기

function removeString(string, indices) {
  let result = "";

  Array.from(string).forEach((x, i) => {
    result += indices.includes(i) ? "" : x;
  });

  return result;
}

// removeString("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]);
// programmers
