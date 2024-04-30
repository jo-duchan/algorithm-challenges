// 부분 문자열 이어 붙여 문자열 만들기

function toAttachPieceOfString(str_arr, parts) {
  const result = parts.reduce((str, [s, e], idx) => {
    const clipStr = str_arr[idx].slice(s, e + 1);

    return (str += clipStr);
  }, "");

  return result;
}

// toAttachPieceOfString(
//   ["progressive", "hamburger", "hammer", "ahocorasick"],
//   [
//     [0, 4],
//     [1, 2],
//     [3, 5],
//     [7, 7],
//   ]
// );
// programmers
