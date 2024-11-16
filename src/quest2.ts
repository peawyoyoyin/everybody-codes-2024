import { Quest, Runner } from "./runner";
import { EOL } from 'node:os'

export class Quest2 implements Quest {
    part1(input: string): string {
        const [runesRaw,,text] = input.split(EOL);
        // strip "WORDS:" prefix
        const runes = runesRaw.trim().substring(6).split(",");

        const occurences = runes.reduce((acc, val) => {
            let pt = 0, count = 0;

            while (pt < text.length) {
                pt = text.indexOf(val, pt);

                if (pt >= 0) {
                    count += 1;
                    pt += val.length;
                } else {
                    break;
                }
            }

            return acc + count;
        }, 0);

        return occurences.toString();
    }

    part2(input: string): string {
        const [runesRaw,,...textsRaw] = input.split(EOL);
        // strip "WORDS:" prefix
        const runes = runesRaw.trim().substring(6).split(",");
        const texts = textsRaw.map(text => text.trim());

        const allRunes = Array.from(
            new Set(
                runes.concat(
                    runes.map(
                        rune => rune.split('').reverse().join('')
                    )
                )
            )
        );

        let totalCount = 0;
        for (let text of texts) {
            let symbols = new Set<number>();
            for (let rune of allRunes) {
                let pt = 0;
                while (pt < text.length) {
                    pt = text.indexOf(rune, pt);
                    if (pt >= 0) {
                        for (let j = 0; j < rune.length; j++) {
                            symbols.add(pt+j);
                        }
                        pt += 1;
                    } else {
                        break;
                    }
                }
            }
            totalCount += symbols.size;
        }


        return totalCount.toString();
    }

    part3(input: string): string {
        const [runesRaw,,...textsRaw] = input.split(EOL);
        // strip "WORDS:" prefix
        const runes = runesRaw.trim().substring(6).split(",");
        const texts = textsRaw.map(text => text.trim());

        const maxRows = texts.length;
        const maxCols = texts[0].length;

        const scales = new Set<string>()
        for (const rune of runes) {
            for (let row = 0; row < maxRows; row++) {
                for (let col = 0; col < maxCols; col++) {
                    // l->r
                    // there is an edge case where cpt can loop into already-searched position resulting in false positives
                    // but we do not have to cover because input does not have such case
                    let match = true;
                    let rpt = row, cpt = col;
                    for (let i = 0; i < rune.length; i++) {
                        if (texts[rpt][cpt] !== rune[i]) {
                            match = false;
                            break;
                        }

                        cpt += 1;
                        if (cpt === maxCols) cpt = 0;
                    }

                    if (match) {
                        rpt = row;
                        cpt = col;
                        for (let i = 0; i < rune.length; i++) {
                            scales.add(`${rpt},${cpt}`);

                            cpt += 1;
                            if (cpt === maxCols) cpt = 0;
                        }
                    }

                    // r->l
                    match = true;
                    rpt = row;
                    cpt = col;
                    for (let i = 0; i < rune.length; i++) {
                        if (texts[rpt][cpt] !== rune[i]) {
                            match = false;
                            break;
                        }

                        cpt -= 1;
                        if (cpt < 0) cpt = maxCols - 1;
                    }

                    if (match) {
                        rpt = row;
                        cpt = col;
                        for (let i = 0; i < rune.length; i++) {
                            scales.add(`${rpt},${cpt}`);

                            cpt -= 1;
                            if (cpt < 0) cpt = maxCols - 1;
                        }
                    }
                    // t->b
                    match = true;
                    rpt = row;
                    cpt = col;
                    for (let i = 0; i < rune.length; i++) {
                        if (rpt === maxRows) {
                            match = false;
                            break;
                        }

                        if (texts[rpt][cpt] !== rune[i]) {
                            match = false;
                            break;
                        }

                        rpt += 1;
                    }

                    if (match) {
                        rpt = row;
                        cpt = col;
                        for (let i = 0; i < rune.length; i++) {
                            scales.add(`${rpt},${cpt}`);

                            rpt += 1;
                        }
                    }

                    // b->t
                    match = true;
                    rpt = row;
                    cpt = col;
                    for (let i = 0; i < rune.length; i++) {
                        if (rpt < 0) {
                            match = false;
                            break;
                        }

                        if (texts[rpt][cpt] !== rune[i]) {
                            match = false;
                            break;
                        }

                        rpt -= 1;
                    }

                    if (match) {
                        rpt = row;
                        cpt = col;
                        for (let i = 0; i < rune.length; i++) {
                            scales.add(`${rpt},${cpt}`);

                            rpt -= 1;
                        }
                    }
                }
            }
        }

        return scales.size.toString();
    }
}

Runner.run('./inputs/quest2', new Quest2());