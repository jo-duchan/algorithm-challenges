// 문자 개수 세기

function theNumberOfLetters(string) {
  const alphabet = Array(52).fill(0);

  Array.from(string).forEach((x, idx) => {
    const charCode = string.charCodeAt(idx);

    if (charCode >= 65 && charCode <= 90) {
      alphabet[charCode - 65] += 1;
    }

    if (charCode >= 97 && charCode <= 122) {
      alphabet[charCode - 97 + 26] += 1;
    }
  });

  return alphabet;
}

// theNumberOfLetters("Programmers");
// [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0,
// ];
