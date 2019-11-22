可以让任何数据触发 Suspense 的 React hooks。

<hr class="read-more" />

为什么：

如果使用 Relay Suspense 方式进行开发的话需要[对异步逻辑进行包装](https://github.com/relayjs/relay-examples/blob/205dfb195c770e7cd3977116654bd69c91d03b90/issue-tracker/src/JSResource.js#L21-L42)然后在组件中使用 [read()](https://github.com/relayjs/relay-examples/blob/master/issue-tracker/src/JSResource.js#L54-L717) 来[获取数据](https://github.com/relayjs/relay-examples/blob/205dfb195c770e7cd3977116654bd69c91d03b90/issue-tracker/src/SuspenseImage.js#L27)。

这意味着：

- 这种方式只能应用到基于 Promise 的异步逻辑。
- 逻辑编写和数据使用需要按照特定的方式。
- 当从`read()`成功获得数据，这仅代表数据“成功返回”而不一定这个数据是“可用的”（除非在逻辑编写上做相应的规范要求两者一致）。所以获得数据后依然还要做各种判断验证数据。

[use-suspensible](https://github.com/crimx/use-suspensible) 不在乎异步逻辑是怎么实现的，它只关心这个数据是否可用，不可用便触发 Suspense。这使到它是一种通用的 Suspense 解决方案。

使用 [use-suspensible](https://github.com/crimx/use-suspensible) 只需要按习惯的方式获取和使用数据即可，逻辑编写不需要做任何改变。
