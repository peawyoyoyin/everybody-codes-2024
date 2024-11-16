import { Runner, Quest } from "./common/runner";

export class $Quest_name implements Quest {
    part1(input: string): string {
        
    }
    
    part2(input: string): string {
    
    }
    
    part3(input: string): string {
    
    }
}

if (import.meta.main){
    Runner.run('./inputs/${Quest_name.toLowerCase()}', new $Quest_name());
}