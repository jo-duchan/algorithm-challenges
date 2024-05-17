// https://school.programmers.co.kr/learn/courses/30/lessons/12901
// 2016년

function returnDayOfTheWeek(a, b) {
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getDate = new Date(`"2016-${a.toString()}-${b.toString()}"`);

  return dayOfWeek[getDate.getDay()];
}

// returnDayOfTheWeek(5, 24);
// TUE
