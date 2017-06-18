import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

export interface FibonacciServiceInterface {
    fibSequence$: Observable<number[]>;
    generate(n: number): void;
}

export class FibService implements FibonacciServiceInterface {
    get fibSequence$(): Observable<number[]> {
        return Observable.empty();
    }
    generate(n: number): void {
    }
}
