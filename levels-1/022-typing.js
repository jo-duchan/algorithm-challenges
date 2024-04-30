// 대충 만든 자판

function typing(keymap, targets) {
  let newKeys = new Map();

  keymap.forEach((keys) => {
    [...keys].forEach((key, idx) => {
      const count = idx + 1;
      if (newKeys.has(key)) {
        newKeys.get(key) > count ? newKeys.set(key, count) : null;
      } else {
        newKeys.set(key, count);
      }
    });
  });

  const result = targets.map((str) => {
    let sum = 0;

    for (let x of str) {
      if (!newKeys.has(x)) return -1;
      sum += +newKeys.get(x);
    }

    return sum;
  });

  return result;
}

// typing(["ABCE"], ["ABDE"]);
// -1
