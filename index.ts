import { day1 } from "./2023/day1/day1";

const { array, sum } = await day1();

console.log("Day 1");
console.table({ "Array Length": array.length, "Array Sum": sum });
