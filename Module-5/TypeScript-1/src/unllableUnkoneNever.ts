export const getUser = (input: string) => {
  if (input) {
    console.log(`From BD: ${input}`);
  } else {
    console.log("From DB: ALL USER");
  }
};

getUser(null);

// unknown

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const discountedPrice = input.split(" ");
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("wrong Input");
  }
};

discountCalculator(100);
discountCalculator("100 Tk");
discountCalculator(null);

// void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");
