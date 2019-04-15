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
