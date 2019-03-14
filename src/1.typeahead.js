import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

export default function () {
  // create elements
  const label = document.createElement('span');
  label.textContent = 'SearchBox: ';
  const searchBox = document.createElement('input');
  searchBox.setAttribute('type', 'text');

  document.body.appendChild(label);
  document.body.appendChild(searchBox);

  // github user search
  const typeahead = fromEvent(searchBox, 'input').pipe(
    map((e) => e.target.value),
    filter(text => text.length > 2),
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(query => fetch(`https://api.github.com/search/users?q=${query}`).then(data => data.json())),
  );

  typeahead.subscribe(({items}) => {
    console.log('DATA:', items);
  });
}
