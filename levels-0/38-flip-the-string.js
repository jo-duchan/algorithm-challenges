// 문자열 여러 번 뒤집기

function flipTheString(string, queries) {
  const result = queries.reduce((string, [s, e]) => {
    let arr = [...string];
    const newString = arr.slice(s, e + 1).reverse();
    arr.splice(s, newString.length, ...newString);

    return arr.join("");
  }, string);

  return result;
}

// flipTheString("rermgorpsam", [
//   [2, 3],
//   [0, 7],
//   [5, 9],
//   [6, 10],
// ]);
// programmers
