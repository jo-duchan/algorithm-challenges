// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

function mockTest(answers) {
  const person1st = [1, 2, 3, 4, 5];
  const person2nd = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3rd = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const ranks = answers.reduce(
    (acc, cur, idx) => {
      if (cur === person1st[idx % person1st.length]) acc[0]++;
      if (cur === person2nd[idx % person2nd.length]) acc[1]++;
      if (cur === person3rd[idx % person3rd.length]) acc[2]++;
      return acc;
    },
    [0, 0, 0]
  );

  const result = ranks.reduce((acc, cur, idx) => {
    const temp = Math.max(...ranks);
    if (temp === cur) {
      return [...acc, idx + 1];
    }

    return acc;
  }, []);

  return result;
}

// mockTest([1, 3, 2, 4, 2]);
// [ 1, 2, 3 ]
