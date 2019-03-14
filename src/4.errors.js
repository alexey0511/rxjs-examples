import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, delay } from 'rxjs/operators';

export default () => {
  // Pure observable
  const observable = new Observable(observer => {
    observer.next(0);
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    setTimeout(() => {
       observer.error('Help me!!!')
    }, 3500);
    setTimeout(() => observer.next(4), 4000);
    setTimeout(() => observer.next(5), 5000);

    setTimeout(() => observer.complete(), 6000);
  })
  // .pipe(catchError(err => of(`Error: ${err}`)));
  // subscribe
  observable
    // .pipe(
    //   // delay(2000),
    //   retry(3)
    // )
    .subscribe(
      val => console.log('New val: ', val),
      err => console.log('Error occured: ', err),
      () => console.log ('---------------END---------------')
    );
}
