// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 시저 암호

function caesarCipher(s, n) {
  const result = [...s].reduce((acc, cur) => {
    const enCoded = cur.charCodeAt();

    if (enCoded === 32) {
      acc.push(enCoded);
    }

    if (65 <= enCoded && enCoded <= 90) {
      acc.push(((enCoded + n - 65) % 26) + 65);
    }

    if (97 <= enCoded && enCoded <= 122) {
      acc.push(((enCoded + n - 97) % 26) + 97);
    }

    return acc;
  }, []);

  return String.fromCharCode(...result);
}

// caesarCipher("a B z", 4);
// e F d
