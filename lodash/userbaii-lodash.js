
var userbaii = {
  chunk: function (array, size) {
    if (size == undefined) {
      size = 1;
    }
    let res = [];
    let arr;
    for (let i = 0; i < array.length / size; i++) {
      arr = []
      for (let j = 0; j < size; j++) {
        if (j + i * size == array.length) {
          break;
        }
        arr[j] = array[j + i * size];
      }
      res[i] = arr;
    }
    return res;
  },
  compact: function (array) {
    let result = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == false || null || 0 || '' || undefined || NaN) {
        continue;
      }
      result[count] = array[i];
      count++
    }
    return result;
  },
  drop: function (array, num) {
    if (num == undefined) {
      num = 1;
    }
    let res = [];
    for (let i = num; i < array.length; i++) {
      res[i - num] = array[i]
    }
    return res;
  },
  dropRight: function (array, num) {
    if (num == undefined) {
      num = 1;
    }
    let res = [];
    for (let i = 0; i < array.length - num; i++) {
      res[i] = array[i]
    }
    return res;
  },
}
