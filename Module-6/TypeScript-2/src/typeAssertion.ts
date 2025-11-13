let anything: any;

anything = "Nahid";

const kgToGMConverter = (input: string | number): string | undefined => {
  if (typeof input === "number") {
    try {
        return
    } catch (error) {
        
    } input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const result1 = kgToGMConverter(2) as unknown as number;

console.log({ result1 });

const result2 = kgToGMConverter("2 kg") as string;

console.log({ result2 });
