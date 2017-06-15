export interface FibonacciServiceInterface {
    generate(n: number): number[];
}

export class FibService implements FibonacciServiceInterface {
    generate(n: number): number[] {
        return [0];
    }
}
