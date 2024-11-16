import { Quest } from "./runner";
import { expect, test, } from "bun:test";

type TestCaseSpec = {
    input: string
    expected: number | string
}
type TestCaseSpecWithCaseNumber = [tcNumber: number, spec: TestCaseSpec]

interface TestQuestSpec {
    part1Cases?: TestCaseSpec[]
    part2Cases?: TestCaseSpec[]
    part3Cases?: TestCaseSpec[]
}

const addTestCaseNumber =
        (cases: TestCaseSpec[]): TestCaseSpecWithCaseNumber[] =>
                cases.map((cse, i) => [i+1, cse] as const)

const executeTest =
    (QuestClass: new () => Quest) =>
        (testCases: TestCaseSpec[]) =>
            (label: string, execution: (quest: Quest, input: string) => string) => {
                if (testCases.length > 0) {
                    test.each(
                        addTestCaseNumber(testCases),
                    )(
                        `${label}: case %d`,
                        (_, { input, expected }) => {
                            const quest = new QuestClass();
                            expect(execution(quest, input)).toBe(expected.toString());
                        }
                    )
                } else {
                    test(`(no tests for ${label})`, () => {})
                }
            }

export const testQuest =
    (QuestClass: new () => Quest) =>
        ({
            part1Cases,
            part2Cases,
            part3Cases
        }: TestQuestSpec) => {
            executeTest(QuestClass)(part1Cases ?? [])("part 1", (q, i) => q.part1(i))
            executeTest(QuestClass)(part2Cases ?? [])("part 2", (q, i) => q.part2(i))
            executeTest(QuestClass)(part3Cases ?? [])("part 3", (q, i) => q.part3(i))
        }