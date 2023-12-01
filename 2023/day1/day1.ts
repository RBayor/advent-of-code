import { cwd } from "process";
import { readLocalTextFile } from "../utils/utils";

export const pathToInputOne = cwd() + "/2023/day1/test-inputs-1.txt";
export const pathToInputTwo = cwd() + "/2023/day1/test-inputs-2.txt";
const realDataPath = cwd() + "/2023/day1/inputs.prod.txt"; // path to your own input

const validNumberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

// PART 1
export const part1 = (input: string[]) => {
  return input.map((word) => {
    const list: number[] = [];
    for (const char of word) {
      if (!isNaN(Number(char))) list.push(+char);
    }

    return +`${list.at(0)}${list.at(-1)}`;
  });
};

export const partOneAnswer = async () => {
  const inputOne = await readLocalTextFile(pathToInputOne);
  if (!inputOne) return;

  return part1(inputOne).reduce((acc, curr) => acc + curr, 0);
};

// PART 2
const extractNumber = (word: string, isReversed: boolean = false) => {
  let tempLetters = "";

  const chars = isReversed ? [...word].reverse() : word;
  for (const char of chars) {
    if (isNaN(Number(char))) {
      tempLetters = (
        isReversed ? char + tempLetters : tempLetters + char
      ).toLowerCase();
      const validNumber = Object.keys(validNumberMap).find((num) =>
        tempLetters.includes(num)
      );

      if (validNumber) {
        return validNumberMap[validNumber as keyof typeof validNumberMap];
      }
    } else {
      return +char;
    }
  }
  return null;
};

export const part2 = (input: string[]): number[] => {
  return input
    .map((word) => {
      const firstNumber = extractNumber(word);
      const lastNumber = extractNumber(word, true);

      if (firstNumber !== null && lastNumber !== null) {
        return parseInt(`${firstNumber}${lastNumber}`, 10);
      }

      return null;
    })
    .filter((num): num is number => num !== null) as number[];
};

export const partTwoAnswer = async () => {
  const inputTwo = await readLocalTextFile(pathToInputTwo);
  if (!inputTwo) return;

  return part2(inputTwo).reduce((acc, curr) => acc + curr, 0);
};

// Actual answer

export const day1 = async () => {
  const input = await readLocalTextFile(realDataPath);

  if (!input) throw new Error("No input");

  const sum = part2(input).reduce((acc, curr) => acc + curr, 0);
  console.log({ sum });
};
