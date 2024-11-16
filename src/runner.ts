import * as path from 'node:path';
import { readFileSync } from "node:fs";

export interface Quest {
    part1(input: string): string;
    part2(input: string): string;
    part3(input: string): string;
}

export namespace Runner {
    export const run = (inputDirectory: string, quest: Quest) => {
        const part1Input = readFileSync(path.join(inputDirectory, 'part1.txt')).toString();
        console.log('part 1:', quest.part1(part1Input));
        const part2Input = readFileSync(path.join(inputDirectory, 'part2.txt')).toString();
        console.log('part 2:', quest.part2(part2Input));
        const part3Input = readFileSync(path.join(inputDirectory, 'part3.txt')).toString();
        console.log('part 3:', quest.part3(part3Input));
    }
}