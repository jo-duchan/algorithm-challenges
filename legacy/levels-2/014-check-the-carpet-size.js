// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// 카펫

function checkTheCarpetSize(brown, yellow) {
  let width = brown / 2;
  let height = 2;

  let isFinish = false;
  while (!isFinish) {
    width--;
    height++;

    let carpet = height * width;
    isFinish = carpet === brown + yellow;
  }
  return [width, height];
}

checkTheCarpetSize(10, 2);

// 1 * 4
//  9
// 909
//  9

// 1*3
//  99
// 9009
//  99

//
//  999
// 90009
//  999
