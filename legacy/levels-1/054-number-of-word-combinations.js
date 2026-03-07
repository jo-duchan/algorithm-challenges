// https://school.programmers.co.kr/learn/courses/30/lessons/133499
// 옹알이 (2)

// 아래와 같이 정규식도 활용 가능
// const regexp1 = /(aya|ye|woo|ma)\1+/;
// const regexp2 = /^(aya|ye|woo|ma)+$/;

function numberOfWordCombinations(babbling) {
  const sayArr = ["aya", "ye", "woo", "ma"];

  const decrement = (word) => {
    for (let i = 0; i < sayArr.length; i++) {
      const regex = new RegExp(`(${sayArr[i]}){2}`);

      if (regex.test(word)) continue;
      word = word.replaceAll(sayArr[i], "*");
    }

    return word.replaceAll("*", "");
  };

  const result = babbling.filter((word) => decrement(word).length === 0);

  return result.length;
}

// numberOfWordCombinations(["wooyemawooye", "mayaa", "ymaeaya"]);
// 1
// numberOfWordCombinations(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
// 2
// numberOfWordCombinations(["ayayemaaya"]);
// 1
