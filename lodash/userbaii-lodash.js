
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
  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  },
  head: function (array) {
    return array[0]
  },
  initial: function (array) {
    if (array.length < 1) {
      return [];
    };
    array.length--;
    return array;
  },
  join: function (array, separator = ',') {
    let str = ''
    for (let i = 0; i < array.length; i++) {
      str = str + array[i] + separator;
    }
    return str;
  },
  reverse: function (array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result[array.length - 1 - i] = array[i];
    }
    array = result;
    return array;
  },

  isBoolean: function (value) {
    if (value === true || value === false) {
      return true;
    }
    return false;
  },
  max: function (array) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > result) {
        result = array[i];
      }
    }
    return result;
  },
  sum: function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
}
