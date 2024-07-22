// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// 영어 끝말잇기

function solution(n, words) {
  const usedWordMap = new Map();

  for (let i = 0; i < words.length; i++) {
    const number = (i % n) + 1;
    const count = Math.ceil((i + 1) / n);
    const previousWord = usedWordMap.get(words[i - 1]) || "";

    if (usedWordMap.get(words[i])) {
      return [number, count];
    }

    if (previousWord && previousWord[previousWord.length - 1] !== words[i][0]) {
      return [number, count];
    }

    usedWordMap.set(words[i], words[i]);
  }

  return [0, 0];
}

// solution(3, [
//   "tank",
//   "kick",
//   "know",
//   "wheel",
//   "land",
//   "dream",
//   "mother",
//   "robot",
//   "tank",
// ]);
// [ 3, 3 ]
