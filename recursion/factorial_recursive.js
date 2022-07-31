function factorial(num) {
  if (num === 1) return 1; //종료점 추가
  return num * factorial(num - 1);
}
