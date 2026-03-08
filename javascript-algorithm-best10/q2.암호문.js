// 문제 링크: https://jsalgo.co.kr/?page=2

// 1. 문제 설명
// 입력 받은 문자열 중 r, e, v 바로 뒤에 숫자의 합을 통해 특정 월 일을 구해 반환
// 뒤에 오는 숫자는 1부터 10 사이고 이를 넘어가는 경우 앞자리만 사용
// 숫자의 합은 11에서 99 사이

// 2. 풀이 방법 설명
// 입력받은 문자열을 matchAll로 정규식 검사를 통해 r, e, v 뒤 2자리 문자열로 뽑아 결과를 배열에 담고,
// 담은 배열을 reduce를 통해 순회를 하며 누적 값에 더해 반환을 한다.
// 이때 타입 안전성을 위해 문자열을 Number로 감싸 number 타입으로 바꿔서 사용한다.
// reduce를 통해 반환 받은 결과를 문자열로 바꿔 템플릿 리터럴을 통해 `result[0]월 result[1]일`의 형태로 반환 한다.

// 3. 구현
function solution(data) {
  const result = [...data.matchAll(/[rev](10|[0-9])/g)].reduce((acc, cur) => {
    return (acc += Number(cur[1]));
  }, 0);

  return `${String(result)[0]}월 ${String(result)[1]}일`;
}

solution('a10b9r1ce33uab8wc918v2cv11v9'); // 1월 6일
