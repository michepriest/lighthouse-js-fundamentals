function concat(array1, array2) {
  var totalArray = [];
  if (array1.length > 0) {
    for (var i = 0; i < array1.length; i++) {
      totalArray.push(array1[i]);
    }
  }
  if (array2.length > 0) {
    for (var i2 = 0; i2 < array2.length; i2++) {
      totalArray.push(array2[i2]);
    }
  }
  return totalArray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);