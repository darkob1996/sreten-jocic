let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const sortArray = function (arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let counter = 0;

  arr.forEach((num, i) => {
    if (num[i] === num[i + 1]) {
      counter++;
    } else if (num[i] !== num[i + 1] && num[i] === num[i - 1]) {
      num[i - counter] = arr.slice(i - counter, i + 1);

      counter = 0;
    }
  });

  arr.forEach((num, ind) => {
    while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
      arr.splice(ind + 1, 1);
    }
  });
  return arr;
};

sortArray(arr);
