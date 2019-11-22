React hooks that can make any data suspensible.

<hr class="read-more" />

Why:

If you follow the Relay Suspense pattern you need to [add wrappers to async logic](https://github.com/relayjs/relay-examples/blob/205dfb195c770e7cd3977116654bd69c91d03b90/issue-tracker/src/JSResource.js#L21-L42) then use [read()](https://github.com/relayjs/relay-examples/blob/master/issue-tracker/src/JSResource.js#L54-L717) to [get data in Components](https://github.com/relayjs/relay-examples/blob/205dfb195c770e7cd3977116654bd69c91d03b90/issue-tracker/src/SuspenseImage.js#L27).

This means:

- It can only apply to Promise based async logic.
- You have to write logic and use data in a specific way.
- When you successfully `read()` a piece of data, it means the data is "fetched" but not necessary "usable"(unless you write business logic in a conventional way to make sure they are the same). You still need to add logic to check e.g. variation/validation of the data.

[use-suspensible](https://github.com/crimx/use-suspensible) does not care how you implement the business logic. It only cares about if the data is usable or not. This makes it a universal solution for Suspense.

With [use-suspensible](https://github.com/crimx/use-suspensible) you simply fetch and use data as usual/you like. It just works (with almost no cost).
