import { Observable } from 'rxjs/Observable';

export interface FibonacciServiceInterface {
    fibSequence$: Observable<number[]>;
    generate(n: number): void;
}

export class FibService implements FibonacciServiceInterface {
    get fibSequence$(): Observable<number[]> {
        return Observable.create();
    }
    generate(n: number): void {
    }
}
