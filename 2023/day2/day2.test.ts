import { describe, expect, test } from "bun:test";
import { readLocalTextFile } from "../utils/utils";
import { cubePart1, pathToInputOne } from "./day2";

describe("Advent of Code Day 2", () => {
  describe("Part 1", async () => {
    const testInputOne = await readLocalTextFile(pathToInputOne);

    test("should match possible games", () => {
      if (!testInputOne) throw new Error("No input");
      const expected = [1, 2, 5];

      const actualAnswer = cubePart1(testInputOne)?.possibleGames;
      console.log(actualAnswer);

      expect(actualAnswer).toEqual(expected);
    });

    test("should match sum of game ids", () => {
      if (!testInputOne) throw new Error("No input");
      const exampleAns = 8;

      const actualAnswer = cubePart1(testInputOne)?.sumOfGameIds;

      expect(actualAnswer).toEqual(exampleAns);
    });
  });
});
