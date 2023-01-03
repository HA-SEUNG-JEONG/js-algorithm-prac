function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return [];
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
