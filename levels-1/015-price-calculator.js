// 부족한 금액 계산하기

function priceCalculator(price, money, count) {
  // 가우스 공식을 사용한 예시
  // const tmp = price * count * (count + 1) / 2 - money;
  //   return tmp > 0 ? tmp : 0;
  let increment = 0;

  for (let i = 1; i <= count; i++) {
    increment += price * i;
  }

  return increment > 0 ? increment - money : 0;
}

// priceCalculator(3, 20, 4);
// 10
