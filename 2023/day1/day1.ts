import { cwd } from "process";
import { readLocalTextFile } from "../utils/utils";

// const testCases = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
// const testCases2 = [
//   "two1nine",
//   "eightwothree",
//   "abcone2threexyz",
//   "xtwone3four",
//   "4nineeightseven2",
//   "zoneight234",
//   "7pqrstsixteen",
// ];
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

const extractNumber = (word: string, isReversed: boolean = false) => {
  let tempLetters = "";

  const chars = isReversed ? [...word].reverse() : word;
  for (const char of chars) {
    if (!isNaN(Number(char))) {
      return +char;
    } else {
      tempLetters = (
        isReversed ? char + tempLetters : tempLetters + char
      ).toLowerCase();
      const validNumber = Object.keys(validNumberMap).find((num) =>
        tempLetters.includes(num)
      );

      if (validNumber) {
        return validNumberMap[validNumber as keyof typeof validNumberMap];
      }
    }
  }
  return null;
};

const findFirstAndLastNumber = (input: string[]) => {
  const answers: number[] = [];

  input.forEach((word) => {
    const firstNumber = extractNumber(word);
    const lastNumber = extractNumber(word, true);

    if (firstNumber !== null && lastNumber !== null) {
      const number = parseInt(`${firstNumber}${lastNumber}`, 10);
      answers.push(number);
    }
  });

  return answers;
};

export const day1 = async () => {
  const input = await readLocalTextFile(cwd() + "/2023/day1/input.txt");

  if (!input) return { array: [], sum: 0 };

  const numArr = findFirstAndLastNumber(input);
  const sum = numArr.reduce((acc, curr) => acc + curr, 0);

  return { array: numArr, sum };
};
