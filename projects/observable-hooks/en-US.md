React hooks for RxJS Observables with super flexible APIs.

<hr class="read-more" />

Why:

- Component specific async logic, which are reused with the Component, no longer needs to be delegated to stateful parent or state management libraries.
- With React Hooks, logic can be encapsulated nicely together for easy testing.
- RxJS comes with a mature and abundant ecosystem which can address a wide range of async problems.

Features:

- Simple yer powerful API. Not only easier to use but also simpler to implement and faster to run.
- States, Props and Observables can interconvert into each other seamlessly.
- Observables can be operated directly, whether they are hooks generated or from outside of the Component.
- Operations on Observables are pure just like [Epic](https://redux-observable.js.org/docs/basics/Epics.html) in Redux Observable which can be reused and isolated for testing.
- Supports [Render-as-You-Fetch](https://observable-hooks.js.org/guide/render-as-you-fetch-suspense.html#observable-suspense-hook) pattern with Suspense.
- Fully tested. Stable API.
