import { Runner, Quest } from "./runner";

export class Quest1 implements Quest {
    private potionCost(enemy: string): number {
        switch (enemy) {
            case 'A':
                return 0;
            case 'B':
                return 1;
            case 'C':
                return 3;
            case 'D':
                return 5;
            default:
                return 0;
        }
    }

    private enemyCount(...enemies: string[]): number {
        return enemies.filter(enemy => enemy !== 'x').length;
    }

    part1(input: string): string {
        const totalPotions = Array.from(input).reduce((acc, val) => {
            return acc + this.potionCost(val);
        }, 0);

        return totalPotions.toString();
    }

    part2(input: string): string {
        let totalCost = 0;
        for (let i = 0; i < input.length; i += 2) {
            const [a, b] = input.slice(i, i+2);

            totalCost += this.potionCost(a);
            totalCost += this.potionCost(b);

            if (this.enemyCount(a, b) > 1) {
                totalCost += 2;
            }
        }
        return totalCost.toString();
    }

    part3(input: string): string {
        let totalCost = 0;
        for (let i = 0; i < input.length; i += 3) {
            const [a, b, c] = input.slice(i, i+3);

            totalCost += this.potionCost(a);
            totalCost += this.potionCost(b);
            totalCost += this.potionCost(c);

            switch (this.enemyCount(a, b, c)) {
                case 2:
                    totalCost += 2;
                    break;
                case 3:
                    totalCost += 6
                    break;
                default:
                    break;
            }
        }
        return totalCost.toString();
    }
}

Runner.run('./inputs/quest1', new Quest1());