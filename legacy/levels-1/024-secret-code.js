// 둘만의 암호

function secretCode(s, skip, index) {
  const skipMap = new Map();

  [...skip].forEach((x) => skipMap.set(x.charCodeAt(), x));
  const getIndex = (num) => ((num - 97) % 26) + 97;

  const result = [...s].reduce((acc, cur) => {
    const curASCII = cur.charCodeAt();
    let count = index;

    for (let i = 1; i <= count; i++) {
      if (skipMap.get(getIndex(i + curASCII))) count++;
    }

    return (acc += String.fromCharCode(getIndex(curASCII + count)));
  }, "");

  return result;
}

// secretCode("aukks", "wbqd", 5);
// happy
// secretCode("zzzzz", "abcdefghijklmnopqrstuvwxy", 6);
// zzzzz
