import { Quest2 } from "./quest2";
import { testQuest } from "./common/testRunner";
import { describe } from "bun:test";

describe("quest2", () => {
    testQuest(Quest2)({
        part1Cases: [
            [
    `WORDS:THE,OWE,MES,ROD,HER
    
AWAKEN THE POWER ADORNED WITH THE FLAMES BRIGHT IRE`,
                4
            ],
            [
    `WORDS:THE,OWE,MES,ROD,HER
    
THE FLAME SHIELDED THE HEART OF THE KINGS`,
                3
            ],
            [
    `WORDS:THE,OWE,MES,ROD,HER
    
POWE PO WER P OWE R`,
                2
            ],
            [
    `WORDS:THE,OWE,MES,ROD,HER
    
THERE IS THE END`,
                3
            ]
        ],
        part2Cases: [
            [
    `WORDS:THE,OWE,MES,ROD,HER
    
AWAKEN THE POWER ADORNED WITH THE FLAMES BRIGHT IRE`,
                15
            ],
            [
    `WORDS:THE,OWE,MES,ROD,HER
    
THE FLAME SHIELDED THE HEART OF THE KINGS`,
                9
            ],
            [
    `WORDS:THE,OWE,MES,ROD,HER
    
POWE PO WER P OWE R`,
                6
            ],
            [
    `WORDS:THE,OWE,MES,ROD,HER
    
THERE IS THE END`,
                7
            ],
            [
    `WORDS:CC
    
CCC`,
                3
            ]
        ],
        part3Cases: [
            [
    `WORDS:THE,OWE,MES,ROD,RODEO
    
HELWORLT
ENIGWDXL
TRODEOAL`,
                10
            ]
        ]
    })
})
