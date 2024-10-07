import { sumValues } from "./sum";

export function asyncAdd(values) {
    setTimeout( () => {
        let total = sumValues(values);
        console.log(`Async Total: ${total}`);
        return total;
    },500);
}