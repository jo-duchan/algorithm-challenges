// 삼총사

function threesome(num) {
  let result = 0;

  const recursive = (cur, init) => {
    if (cur.length === 3) {
      result += cur.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
    }

    for (let i = init; i < num.length; i++) {
      recursive([...cur, num[i]], i + 1);
    }
  };

  recursive([], 0);

  return result;
}

// threesome([-2, 3, 0, 2, -5]);
// 2
