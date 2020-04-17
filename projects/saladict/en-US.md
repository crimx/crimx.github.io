A handy dictionary extension with eye-pleasing UI. Praised([Chrome review](https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg?hl=en) / [Firefox review](https://addons.mozilla.org/zh-CN/firefox/addon/ext-saladict/reviews/)) and supported by hundreds of thousands of users.

<hr class="read-more" />

Highlights in terms of functional design:

1. Results from different dictionaries are integrated into one panel with consistent styles for easy cross-reference.
1. Rapid searching with multiple search modes plus different profiles.
1. Search text contexts as well as translations are kept in notebook.
1. High accessibility. Inside iframes, PDFs and even outside of browser.
1. Follow Unix philosophy. Focus on experience on looking up words while offering flexible interface for force multiplier effects [with other tools](https://saladict.crimx.com/en/manual.html#shortcuts).

Highlights in terms of technical implementation:

1. Mass use of [React Hooks](https://reactjs.org/docs/hooks-intro.html) for abstracting Component async UI logic, with [RxJS](https://github.com/ReactiveX/rxjs) handling complex user inputs(See my other project [observable-hooks](https://github.com/crimx/observable-hooks)).
1. Components are built with [Storybook](https://storybook.js.org) which enables rapid UI development.
1. Syltes of dictionary panel and each dictionary are isolated with [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) with lower cost of performance.
1. Automation are introduced into the build process(with my other project [neutrino-webextension](https://github.com/crimx/neutrino-webextension)). Dictionaries are loaded with a plugin mechanism.
