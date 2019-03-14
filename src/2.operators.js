import { fromEvent, of, from, interval } from 'rxjs';
import { map, scan, distinctUntilChanged, debounceTime, throttleTime, delay, switchMap, concatMap, tap, mergeMap, filter } from 'rxjs/operators';

export default () => {

  // click counter
  // const observable = fromEvent(document, 'click').pipe(
  //   map(val => 1),
  //   scan((val, cur) => cur + val)
  // )

  // tap, distinctUntilChanged, filter
  // const observable = of(1,1,1,1,1,1,1,2,3,4,5,5,6,7,8,9,10).pipe(
  //   mergeMap((i, id) => of(i).pipe(delay((id + 1) * 500))),
    // tap(i => console.log('Log this Record', i)),
  //   filter(i => i % 2 === 0),
  //   map(i => i + 2)
  // )


  // debounce & throttle
  const observable = interval(1000).pipe(
    // debounceTime(3000),
    throttleTime(3000)
  )


  // map & mergeMap & concatMap & switchMap

  // subscribe
  observable.subscribe(
    val => console.log(`You clicked ${val} times`),
    err => console.log('Error occured: ', err),
    () => console.log ('---------------END---------------')
  );
}
