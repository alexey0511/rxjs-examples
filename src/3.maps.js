import { of, from, forkJoin } from 'rxjs';
import { map, mergeMap, delay, switchMap, concatMap, tap } from 'rxjs/operators';

export default () => {
  // const getData = (param) => {
  // const delayTime = Math.floor(Math.random() * 10000) + 1;
  //   return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
  //     delay(delayTime)
  //   )
  // }
  //
  // // using a regular map
  // from([1,2,3,4]).pipe(
  //   map(param => getData(param))
  // ).subscribe(val => val.subscribe(data => console.log('map:', data)));
  //
  // // using mergeMap
  // from([1, 2, 3 ,4]).pipe(
  //   mergeMap(param => getData(param))
  // ).subscribe(val => console.log('mergeMap:', val));
  //
  // // using mergeMap
  // from([1, 2, 3 ,4]).pipe(
  //   switchMap(param => getData(param))
  // ).subscribe(val => console.log('switchMap:', val));
  //
  // // using concatMap
  // from([1, 2, 3 ,4]).pipe(
  //   concatMap(param => getData(param))
  // ).subscribe(val => console.log('concatMap:', val));

  // FORK JOIN
  // let stream1 = of({source:1,value:1}).pipe(tap(() => console.log('stream 1')));
  // let stream2 = of({source:2,value:1}).pipe(tap(() => console.log('stream 2')), delay(5000));
  // forkJoin(stream1, stream2).subscribe((res) => console.log('Fork Join: ', res));
}
