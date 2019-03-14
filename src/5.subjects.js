import { Subject, BehaviorSubject } from 'rxjs';

export default () => {
  const subject = new Subject();
  const bsubject = new BehaviorSubject(0);


  subject.next(1)

  setTimeout(() => subject.next(1), 1000)
  setTimeout(() => bsubject.next(1), 1000)

  setTimeout(() => subject.next(2), 2000)
  setTimeout(() => bsubject.next(2), 2000)

  setTimeout(() => subject.next(3), 3000)
  setTimeout(() => bsubject.next(3), 3000)


  setTimeout(() => {
    subject.subscribe(v => console.log('Subject value: ', v))
    bsubject.subscribe(v => console.log('Behavior Subject value: ', v))
  }, 2500)

}
