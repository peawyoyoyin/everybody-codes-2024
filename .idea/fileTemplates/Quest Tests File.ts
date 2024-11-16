import { $Quest_name } from "./${Quest_name.toLowerCase()}";
import { testQuest } from "./common/testRunner";
import { describe } from "bun:test";

describe("${Quest_name.toLowerCase()}", () => {
    testQuest($Quest_name)({
        part1Cases: [
            {
                input: "input",
                expected: "expected"
            },
        ],
        part2Cases: [
            {
                input: "input",
                expected: "expected"
            }
        ],
        part3Cases: [
            {
                input: "input",
                expected: "expected"
            }
        ]
    })
})
