# Get current tab url

A simple function for Chrome or Safari extensions that returns a promise
that resolves to the url of the current tab.

```
import getCurrentTabUrl from 'get-current-tab-url';

getCurrentTabUrl()
  .then(url => console.log(url));
```
