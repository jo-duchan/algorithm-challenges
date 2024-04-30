// K번째 수

function theKthNumber(array, commands) {
  const result = commands.reduce((acc, cur) => {
    const [i, j, k] = cur;
    const arr = array.slice(i - 1, j).sort((a, b) => a - b);

    return [...acc, arr[k - 1]];
  }, []);

  return result;
}

// theKthNumber(
//   [1, 5, 2, 6, 3, 7, 4],
//   [
//     [2, 5, 3],
//     [4, 4, 1],
//     [1, 7, 3],
//   ]
// );
// [ 5, 6, 3 ]
