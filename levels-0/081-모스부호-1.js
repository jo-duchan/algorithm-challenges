// https://school.programmers.co.kr/learn/courses/30/lessons/120838

function solution(letter) {
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const morseCodeMap = morseCode.reduce(
    (map, code, index) => map.set(code, String.fromCharCode(index + 97)),
    new Map()
  );

  const answer = letter
    .split(" ")
    .map((code) => morseCodeMap.get(code))
    .join("");

  return answer;
}

solution(".... . .-.. .-.. ---");
