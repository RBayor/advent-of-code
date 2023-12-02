import { cwd } from "process";
import { readLocalTextFile } from "../utils/utils";

export const pathToInputOne = cwd() + "/2023/day2/test-inputs-1.txt";
export const realDataPath = cwd() + "/2023/day2/inputs.prod.txt";

type Round = {
  red?: number;
  green?: number;
  blue?: number;
  isPossibleGame?: boolean;
};
type Result = {
  [key: string]: Round[];
};

export const cubePart1 = (gamesPlayed: string[]) => {
  const regex = /(\d+) (\w+)/g;

  const results: Result = {};
  const maxInBag = { red: 12, green: 13, blue: 14 };

  for (const game of gamesPlayed) {
    const gameId = game.split(": ")[0];
    const rounds = game.split(": ")[1].split("; ");

    const played: Round[] = [];

    for (const gameRound of rounds) {
      const matches = gameRound.match(regex);
      if (!matches) return;

      const res = matches.reduce((acc, curr) => {
        const [numberStr, color] = curr.split(" ");
        const number = parseInt(numberStr);
        const currentMax = maxInBag[color as keyof typeof maxInBag];

        let isPossibleGame =
          acc.isPossibleGame !== false && number <= currentMax;

        return {
          ...acc,
          [color]: number,
          isPossibleGame,
        };
      }, {} as Round);

      if (res) {
        played.push(res);
      }
    }

    results[gameId] = played;
  }

  const possibleGames = Object.keys(results)
    .filter((gameId) => {
      return results[gameId].every((round) => round.isPossibleGame);
    })
    .map((gameId) => +gameId.replace("Game", ""));

  return {
    possibleGames,
    sumOfGameIds: possibleGames.reduce((acc, curr) => acc + curr, 0),
    results,
  };
};

const input = await readLocalTextFile(realDataPath);

if (input) {
  console.log(cubePart1(input));
}
