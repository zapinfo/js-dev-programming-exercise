# js-dev-programming-exercise

For this quick exercise, please create a [bookmarklet](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks) that will run on this [Speaker List Page](https://www.thatconference.com/Speakers). 

The bookmarklet should scrape the page and extract every speaker with the terms `hacker`, `engineer`, or `developer` in their title.

The script should output the results to the console in the following format:

```
{
  num_results: 1,
  results: [{
    'name': 'Evan Carothers',
    'bio': 'https://www.thatconference.com/speakers/speaker/evancarothers',
    'headshot_data_uri': <base 64 data URI of headshot>
  },...]
}

```

The `results` should be sorted by name alphabeticaly (A-Z). You can use any external libraries you wish to pull in (such as jQuery), or rely on vanillaJS. The bookmarklet only needs to work in Google Chrome, so you can use any ES6 you wish.

Please fork this repo and submit your solution back to it as a pull request. Thanks!
