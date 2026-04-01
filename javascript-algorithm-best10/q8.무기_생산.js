// 문제 링크: https://jsalgo.co.kr/?page=8

// 1. 문제 설명
// 무기 구매 예산을 입력받아, 구매할 수 있는 날선 검의 개수를 반환한다.
// 검 한 자루 3000원, 날을 세우면 300, 10자루 당 날서지 않은 검 1개, 100자루 당 날선 검 1개를 서비스로 받음

// 2. 풀이 방법 설명
// 1. 날선 검 1자루 가격 = 검 가격(3000) + 날 세우기(300) = 3300원
// → 예산으로 먼저 "직접 구매 가능한 날선 검 개수"를 구한다.

// 2. 직접 구매한 날선 검 개수
// = Math.floor(예산 / 3300)

// 3. 남은 금액
// = 예산 % 3300
// → 이 돈으로 서비스로 받은 "무딘 검"을 날세울 수 있음

// 4. 서비스 검 계산
// - 100자루마다 날선 검 1개 무료
// - 10자루마다 날서지 않은 검 1개 무료
//   (단, 100자루 단위는 이미 날선 검으로 처리되므로 나머지에 대해서만 계산)

// 서비스 날선 검
// = Math.floor(구매한 날선 검 / 100)

// 서비스 무딘 검
// = Math.floor((구매한 날선 검 % 100) / 10)

// 5. 서비스 무딘 검을 날세우기
// - 남은 돈으로 몇 개를 날세울 수 있는지 계산
//   = Math.floor(남은 금액 / 300)
// - 단, 실제로는 서비스로 받은 무딘 검 개수만큼만 가능

// → 날세운 서비스 검 개수
// = Math.min(서비스 무딘 검 개수, Math.floor(남은 금액 / 300))

// 6. 최종 결과
// = 직접 구매한 날선 검
// + 서비스 날선 검
// + (서비스 무딘 검 중 날세운 개수)

// 3. 구현
function solution(budget) {
  const SWORD_COST = 3000;
  const SHARPEN_COST = 300;
  const SHARP_SWORD_COST = SWORD_COST + SHARPEN_COST;

  const boughtSharp = Math.floor(budget / SHARP_SWORD_COST);
  const remain = budget % SHARP_SWORD_COST;

  const freeSharp = Math.floor(boughtSharp / 100);
  const freeDull = Math.floor((boughtSharp % 100) / 10);
  const sharpenedFreeDull = Math.min(
    freeDull,
    Math.floor(remain / SHARPEN_COST),
  );

  return boughtSharp + freeSharp + sharpenedFreeDull;
}

solution(100); // 0
solution(36600); // 12
