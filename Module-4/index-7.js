const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
 
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // let temp = array(i);
      // array[i] = array[minIndex];
      // array[minIndex] = temp;

      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    console.log(`After pass ${i + 1}`, array);
  }
};

selectionSort([5, 9, 8, 4, 2]);
//Output
/*
After pass 1 [ 2, 9, 8, 4, 5 ]
After pass 2 [ 2, 4, 8, 9, 5 ]
After pass 3 [ 2, 4, 5, 9, 8 ]
After pass 4 [ 2, 4, 5, 8, 9 ]
*/
