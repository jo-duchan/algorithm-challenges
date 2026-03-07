// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string, is_suffix) {
  const temp = my_string.slice(my_string.length - is_suffix.length);

  return temp === is_suffix ? 1 : 0;
}

// solution('banana', 'ana');
// 1
