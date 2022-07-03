const sortingNumber = (num1, num2) => {
  console.log(num1, num2);
  return num1 - num2;
};

console.log([23, 45, 6, 12, 13].sort(sortingNumber));

const compareByLength = (str1, str2) => {
  return str1.length - str2.length;
};

console.log(
  ["Steele", "Colt", "Data Structure", "Algorithms"].sort(compareByLength)
);
