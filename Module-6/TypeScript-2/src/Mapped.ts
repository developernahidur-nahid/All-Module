const arrayNumber: number[] = [1, 2, 3, 6, 5, 4, 8, 7];

const arrayStr: string[] = arrayNumber.map((item) => item.toString());

console.log(arrayStr);

type ArrayofNum = {
  hight: number;
  Width: number;
};

type ArrayofStr = {
  hight: string;
  Width: string;
};

type Arr<T> = {
  [key in keyof T]: T[key];
};

const arr1: Arr<{ hight: string; width: boolean }> = {
  hight: "15",
  width: true,
};
