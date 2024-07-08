// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// 실패율 (2019 KAKAO BLIND RECRUITMENT)

function calculateFailureRate(N, stages) {
  const failureTable = new Map();
  const result = [];
  let count = 0;

  for (let i = 1; i <= N; i++) {
    failureTable.set(i, 0);
  }

  for (let i = 0; i < stages.length; i++) {
    if (stages[i] > N) continue;

    const cumulativeValue = failureTable.get(stages[i]) || 0;
    failureTable.set(stages[i], cumulativeValue + 1);
  }

  for (let i = 1; i <= N; i++) {
    const temp = failureTable.get(i);
    const ratio = temp / (stages.length - count);

    result.push([i, ratio]);
    count = count + temp;
  }

  return result.sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}

// calculateFailureRate(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// [ 3, 4, 2, 1, 5 ]
