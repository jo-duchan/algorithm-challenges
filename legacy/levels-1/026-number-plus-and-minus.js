// 음양 더하기

function numberPlusAndMinus(absolutes, signs) {
  const result = absolutes.reduce((acc, cur, idx) => {
    if (signs[idx]) {
      return (acc += cur);
    }

    return (acc -= cur);
  }, 0);

  return result;
}

// numberPlusAndMinus([4, 7, 12], [true, false, true]);
// 9
