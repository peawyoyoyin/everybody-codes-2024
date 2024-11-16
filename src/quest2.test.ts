import { test, describe, expect } from "bun:test";
import { Quest2 } from "./quest2";

describe("quest2", () => {
    const case1 =
`WORDS:THE,OWE,MES,ROD,HER

AWAKEN THE POWER ADORNED WITH THE FLAMES BRIGHT IRE`

    const case2 =
`WORDS:THE,OWE,MES,ROD,HER

THE FLAME SHIELDED THE HEART OF THE KINGS`

    const case3 =
`WORDS:THE,OWE,MES,ROD,HER

POWE PO WER P OWE R`

    const case4 =
`WORDS:THE,OWE,MES,ROD,HER

THERE IS THE END`

    const case5 =
`WORDS:CC

CCC`

    test.each([
        [1, case1, 4],
        [2, case2, 3],
        [3, case3, 2],
        [4, case4, 3],
    ])('part 1: test case %d', (_case, input, expected) => {
        const q = new Quest2();
        expect(q.part1(input)).toBe(expected.toString());
    });

    test.each([
        [1, case1, 15],
        [2, case2, 9],
        [3, case3, 6],
        [4, case4, 7],
        [5, case5, 3]
    ])('part 2: test case %d', (_case, input, expected) => {
        const q = new Quest2();
        expect(q.part2(input)).toBe(expected.toString());
    });

    const case6 =
`WORDS:THE,OWE,MES,ROD,RODEO

HELWORLT
ENIGWDXL
TRODEOAL`

    test.each([
        [1, case6, 10]
    ])('part 3: test case %d', (_case, input, expected) => {
        const q = new Quest2();
        expect(q.part3(input)).toBe(expected.toString());
    });
})