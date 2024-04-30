// 숫자놀이

function gameOfNumbers(str) {
  const checklist = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const result = checklist.reduce((acc, num, idx) => {
    return acc.replaceAll(num, idx);
  }, str);

  return parseInt(result);
}

// gameOfNumbers("one4seveneight");
// 1478
