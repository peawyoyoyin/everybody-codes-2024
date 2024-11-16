import { Quest2 } from "./quest2";
import { testQuest } from "./common/testRunner";
import { describe } from "bun:test";

describe("quest2", () => {
    testQuest(Quest2)({
        part1Cases: [
            {
                input:
`WORDS:THE,OWE,MES,ROD,HER
    
AWAKEN THE POWER ADORNED WITH THE FLAMES BRIGHT IRE`,
                expected: 4
            },
            {
                input:
`WORDS:THE,OWE,MES,ROD,HER
    
THE FLAME SHIELDED THE HEART OF THE KINGS`,
                expected: 3
            },
            {
                input:
`WORDS:THE,OWE,MES,ROD,HER
    
POWE PO WER P OWE R`,
                expected: 2
            },
            {
                input:
`WORDS:THE,OWE,MES,ROD,HER
    
THERE IS THE END`,
                expected: 3
            }
        ],
        part2Cases: [
            {
                input:
`WORDS:THE,OWE,MES,ROD,HER
    
AWAKEN THE POWER ADORNED WITH THE FLAMES BRIGHT IRE`,
                expected: 15
            },
            {
                input:
`WORDS:THE,OWE,MES,ROD,HER
    
THE FLAME SHIELDED THE HEART OF THE KINGS`,
                expected: 9
            },
            {
                input:
`WORDS:THE,OWE,MES,ROD,HER
    
POWE PO WER P OWE R`,
                expected: 6
            },
            {
                input:
`WORDS:THE,OWE,MES,ROD,HER
    
THERE IS THE END`,
                expected: 7
            },
            {
                input:
`WORDS:CC
    
CCC`,
                expected: 3
            }
        ],
        part3Cases: [
            {
                input:
`WORDS:THE,OWE,MES,ROD,RODEO
    
HELWORLT
ENIGWDXL
TRODEOAL`,
                expected: 10
            }
        ]
    })
})
