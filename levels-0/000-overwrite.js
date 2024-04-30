// 문지열 겹쳐쓰기

function overwrite(str, over_str, n) {
  return str.slice(0, n) + over_str + str.slice(n + over_str.length);
}

// overwrite("He11oWor1d", "lloWorl", 2);
// HelloWorld
