import { Observable, of, fromEvent, from } from 'rxjs';

export default () => {

  // Pure observable
  const observable = new Observable(observer => {
    observer.next(0);
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    setTimeout(() => observer.next(4), 4000);
    setTimeout(() => observer.next(5), 5000);
    setTimeout(() => observer.complete(), 6000);
  });

  // from OF
  // const observable = of(1,'2', {3: 3}, true);

  // from Event
  // const observable = fromEvent(document, 'click')

  // fromPromise
  // const promise = new Promise(resolve => setTimeout(() => resolve(true), 3000))
  // const observable = from(promise)





  // subscribe
  observable.subscribe(
    val => console.log('New val: ', val),
    err => console.log('Error occured: ', err),
    () => console.log ('---------------END---------------')
  );
}

const fromOf = () => {

  fromOf.subscribe(
    val => console.log('New val: ', val),
    err => console.log('Error occured: ', err),
    () => console.log ('---------------END---------------')
  );

}
