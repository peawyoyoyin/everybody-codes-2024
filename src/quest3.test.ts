import { Quest3 } from "./quest3";
import { testQuest } from "./common/testRunner";
import { describe } from "bun:test";

describe("quest3", () => {
    testQuest(Quest3)({
        part1Cases: [
            [
`..........
..###.##..
...####...
..######..
..######..
...####...
..........`,
                35
            ]
        ],
        part3Cases: [
            [
`..........
..###.##..
...####...
..######..
..######..
...####...
..........`,
                29
            ]
        ]
    });
})