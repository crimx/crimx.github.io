[![Github Stars][img-gh-stars]][gh-stars]
[![Chrome Web Store][img-chrome-dl]][cws]
[![Chrome Web Store][img-chrome-rating]][cws]
[![Mozilla Add-on][img-firefox-dl]][amo]
[![Mozilla Add-on][img-firefox-rating]][amo]

[img-gh-stars]: https://img.shields.io/github/stars/crimx/ext-saladict.svg?label=Stars&style=social
[gh-stars]: https://github.com/crimx/ext-saladict

[img-chrome-dl]: https://img.shields.io/chrome-web-store/d/cdonnmffkdaoajfknoeeecmchibpmkmg.svg?maxAge=3600&colorB=1a73e8&label=Chrome%20downloads
[img-chrome-rating]: https://img.shields.io/chrome-web-store/rating/cdonnmffkdaoajfknoeeecmchibpmkmg.svg?maxAge=3600&colorB=1a73e8&label=rating
[cws]: https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg?hl=en

[img-firefox-dl]: https://img.shields.io/amo/d/ext-saladict.svg?maxAge=3600&colorB=ff9500&label=Firefox%20downloads
[img-firefox-rating]: https://img.shields.io/amo/rating/ext-saladict.svg?maxAge=3600&colorB=ff9500&label=rating
[amo]: https://addons.mozilla.org/firefox/addon/ext-saladict/



A handy Chrome / Firefox dictionary extension with eye-pleasing UI. [Praised](https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg?hl=en) and supported by hundreds of thousands of users.

<hr class="read-more" />

In terms of functional design:

1. Results from different dictionaries are integrated into one panel with consistent styles for easy cross-reference.
1. Rapid searching with multiple search modes plus different profiles.
1. Search text contexts as well as translations are kept in notebook.
1. Works every where. Even inside iframes and PDFs.

In terms of technical implementation:

1. Complex user inputs are handled with [RxJS](https://github.com/ReactiveX/rxjs).
1. Embed dict panel is sandboxed with iframe. Thanks to [React Portal](https://reactjs.org/docs/portals.html), elements inside iframe are generated under the same React component tree; events within iframe can bubble out via React [SyntheticEvent](https://reactjs.org/docs/events.html).
1. Extraction of dictionary results requires thorough understanding of page DOM structure pattern and obfuscated JavaScript code. Saladict has revived some of the abandoned services like [Youdao page translation](http://fanyi.youdao.com/web2/).
1. Usability and accessibility and taken into consideration when designing the HTML. Compatible with shortkey tools like [Vimium](https://github.com/philc/vimium).
1. Automation are introduced into the build process. Dictionaries are loaded with a plugin mechanism.
