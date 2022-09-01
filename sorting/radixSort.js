//비교를 통한 정렬이 아님

//끝자리수만 보고 버킷 안에 집어넣음
//각 버킷 안에서는 정렬하지 않음

//helper method

//getDigit(num,place) 수와 위치를 가져온 다음 그 위치의 숫자를 반환
//주의사항: 숫자를 오른쪽에서부터 읽어나가야 함, 즉 맨 뒷자리수가 0, 왼쪽으로 가서 1..2..3.. 이런식

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//digitCount(num) - 전체 목록에서 자릿수가 가장 많은 수를 알아내는데 자릿수 계산
// 자릿수 계산에 10진수를 넣으면 자릿수가 얼마나 되는지 반환한다.

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log(Math.abs(num))) + 1;
}

//mostDigits(nums) - 수 목록을 가져와서 가장 자릿수가 많은 수가 무엇인지, 자릿수 계산을 통해 알려준다.
//인자 : 여러 개의 수가 들어있는 배열

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//기수 정렬 의사코드
// 1. 수 목록을 받는 함수를 정의
// 2. 가장 큰 수가 몇 자리인지 알아내야 한다.
// 3. 루프 시작 - 0부터 가장 큰 자릿수
// 4. 진행할 때마다 각 자릿수에 버킷 생성(버킷은 빈 배열)
// 5. 루프를 수행할 때마다 각각의 수를 올바른 버킷에 넣기
// 6. 기존 배열을 버킷의 값으로 교체

function radixSort(nums) {
  const maxDigits = mostDigits(nums);

  for (let i = 0; i < maxDigits; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 567, 89, 12234324, 90]));
