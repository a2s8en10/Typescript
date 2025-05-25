export interface home {
  houseId: number;
  houseName: string;
}

export function AddNum(a: number, b: number): number {
  return a + b;
}

type select = "Add" | "Divide" | "Multi" | "Subtract";

export function calculator(Select: select, a: number, b: number): void {
  switch (Select) {
    case "Add":
      console.log("Add Two number :", a + b);
      break;
    case "Divide":
      console.log("Divide Two number :", a / b);
      break;
    case "Multi":
      console.log("Multi Two number :", a * b);
      break;
    case "Subtract":
      console.log("Subtract Two number :", a - b);
      break;
  }
}
