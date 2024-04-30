// 할 일 목록

function todoList(list, finished) {
  const result = list.filter((_, i) => !finished[i]);
  return result;
}

// todoList(
//   ["problemsolving", "practiceguitar", "swim", "studygraph"],
//   [true, false, true, false]
// );
