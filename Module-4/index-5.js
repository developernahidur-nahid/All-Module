// const isPelindrom = (str) => {
//   const nap = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const rever = nap.split("").reverse().join("");
//   console.log(nap);
//   console.log(rever);
//   if (nap === rever){
//     return true;
//   }
//   return false;
// };

// console.log(isPelindrom("mom dod mom "));

const isPelindrom = (str) => {
  const nap = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = nap.length - 1;

  while (left < right) {
    if (nap[left] !== nap[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPelindrom("mom dod mom l"));
