import { describe, expect, test } from "bun:test";
import { readLocalTextFile } from "../utils/utils";
import {
  part1,
  part2,
  partOneAnswer,
  partTwoAnswer,
  pathToInputOne,
  pathToInputTwo,
} from "./day1";

describe("Advent of Code Day 1", () => {
  describe("Part 1", async () => {
    const testInputOne = await readLocalTextFile(pathToInputOne);

    test("should match exmaple 1 array", () => {
      if (!testInputOne) throw new Error("No input");
      const exampleArr = [12, 38, 15, 77];

      const actualAnswer = part1(testInputOne);

      expect(actualAnswer).toEqual(exampleArr);
    });

    test("should match example 1 answer", async () => {
      if (!testInputOne) throw new Error("No input");
      const exampleAns = 142;

      const actualAnswer = await partOneAnswer();
      expect(actualAnswer).toEqual(exampleAns);
    });
  });

  describe("Part 2", async () => {
    const testInputTwo = await readLocalTextFile(pathToInputTwo);

    test("should match example 2 array", () => {
      if (!testInputTwo) throw new Error("No input");
      const expectedAnswer = [29, 83, 13, 24, 42, 14, 76];

      const actualAnswer = part2(testInputTwo);

      expect(actualAnswer).toEqual(expectedAnswer);
    });

    test("should match example 2 answer", async () => {
      if (!testInputTwo) throw new Error("No input");
      const expectedAnswer = 281;

      const actualAnswer = await partTwoAnswer();

      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });
});
