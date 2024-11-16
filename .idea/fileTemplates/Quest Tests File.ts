import { $Quest_name } from "./${$Quest_name.toLowerCase()}";
import { testQuest } from "./common/testRunner";
import { describe } from "bun:test";

describe("$Quest_name", () => {
    testQuest($Quest_name)({
        part1Cases: [
            [
                "input"
                "expected"
            ],
        ],
        part2Cases: [
            [
                "input"
                "expected"
            ]
        ]
        part3Cases: [
            [
                "input"
                "expected"
            ]
        ]
    })
})
