import { describe, expect, test } from "bun:test";
import { Quest2 } from "./quest2";
import { Quest3 } from "./quest3";

describe("quest3", () => {
    const case1 =
`..........
..###.##..
...####...
..######..
..######..
...####...
..........`

    test.each([
        [1, case1, 35]
    ])("part 1: case %s", (_case, input, expected) => {
        const q = new Quest3();
        expect(q.part1(input)).toBe(expected.toString());
    });

const case2 =
`..........
..###.##..
...####...
..######..
..######..
...####...
..........`
    test.each([
        [1, case2, 29]
    ])("part 3: case %s", (_case, input, expected) => {
        const q = new Quest3();
        expect(q.part3(input)).toBe(expected.toString());
    });
})