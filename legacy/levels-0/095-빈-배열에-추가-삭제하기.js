// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr, flag) {
  const repeat = (number, callback) => {
    for (let i = 0; i < number; i++) {
      callback();
    }
  };

  const answer = flag.reduce((array, condition, index) => {
    const value = arr[index];
    if (condition) {
      repeat(value * 2, () => array.push(value));
    } else {
      repeat(value, () => array.pop());
    }

    return array;
  }, []);

  return answer;
}

// solution([3, 2, 4, 1, 3], [true, false, true, false, false]);
// [3, 3, 3, 3, 4, 4, 4, 4];
