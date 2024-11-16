import { Quest, Runner } from "./runner";
import { EOL } from "node:os";

export class Quest3 implements Quest {
    part1(input: string): string {
        const grid = input.split(EOL).map(line => line.trim());

        let state: number[][] = grid.map(row => Array.from(row).map(cell => cell === '#' ? 1 : 0))

        const maxRows = grid.length, maxCols = grid[0].length;

        while (true) {
            let proceed = false;
            const nextState: number[][] = state.map(row => row.map(cell => cell))
            for (let y = 0; y < maxRows; y++) {
                for (let x = 0; x < maxCols; x++) {
                    if (state[y][x] > 0) {
                        const toCheck = [
                            [y - 1, x],
                            [y + 1, x],
                            [y, x - 1],
                            [y, x + 1]
                        ]
                        // no need to check for bounds because input does not have # that is close to boundary

                        let ok = true;
                        for (const coord of toCheck) {
                            const [ty, tx] = coord;
                            if (state[ty][tx] !== state[y][x]) {
                                ok = false;
                                break;
                            }
                        }

                        if (ok) {
                            nextState[y][x] += 1;
                            proceed = true;
                        }
                    }
                }
            }
            state = nextState;

            // for (let row of state) {
            //     console.log(row.join(''))
            // }
            // console.log('---')

            if (!proceed) {
                break;
            }
        }

        // for (let row of state) {
        //     console.log(row.map(cell => cell.toString(16)).join(''))
        // }
        let result = 0;
        for (let y = 0; y < maxRows; y++) {
            for (let x = 0; x < maxCols; x++) {
                result += state[y][x];
            }
        }

        return result.toString();
    }

    part2(input: string): string {
        return this.part1(input);
    }

    part3(input: string): string {
        const grid = input.split(EOL).map(line => line.trim());

        let state: number[][] = grid.map(row => Array.from(row).map(cell => cell === '#' ? 1 : 0))

        const maxRows = grid.length, maxCols = grid[0].length;

        while (true) {
            let proceed = false;
            const nextState: number[][] = state.map(row => row.map(cell => cell))
            for (let y = 0; y < maxRows; y++) {
                for (let x = 0; x < maxCols; x++) {
                    if (state[y][x] > 0) {
                        const toCheck = [
                            [y - 1, x],
                            [y + 1, x],
                            [y, x - 1],
                            [y, x + 1],
                            [y - 1, x - 1],
                            [y - 1, x + 1],
                            [y + 1, x - 1],
                            [y + 1, x + 1]
                        ]

                        let ok = true;
                        for (const coord of toCheck) {
                            const [ty, tx] = coord;
                            if (
                                    ty < 0 || ty >= maxRows
                                        || tx < 0 || tx >= maxCols
                                        || state[ty][tx] !== state[y][x]
                            ) {
                                ok = false;
                                break;
                            }
                        }

                        if (ok) {
                            nextState[y][x] += 1;
                            proceed = true;
                        }
                    }
                }
            }
            state = nextState;

            // for (let row of state) {
            //     console.log(row.join(''))
            // }
            // console.log('---')

            if (!proceed) {
                break;
            }
        }

        for (let row of state) {
            console.log(row.map(cell => cell.toString(16)).join(''))
        }
        let result = 0;
        for (let y = 0; y < maxRows; y++) {
            for (let x = 0; x < maxCols; x++) {
                result += state[y][x];
            }
        }

        return result.toString();
    }

}

Runner.run(
    './inputs/quest3',
    new Quest3()
)