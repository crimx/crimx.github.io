通过 React hooks 在组件中无缝连接 RxJS Observables 以复用异步逻辑。

<hr class="read-more" />

为什么要在组件中复用异步逻辑：

- 一些只跟当前组件相关的异步逻辑不再需要委托到父组件或者状态管理库，从而达到真正的组件复用。
- React Hooks 紧凑的代码风格可以让逻辑封装到一起，更方便隔离测试。
- 使用 RxJS 是因为其成熟丰富的生态，对简单到复杂的异步逻辑都有很好的解决方案。

相比同类库优势：

- 简洁的 API，不仅更容易使用且实现更简洁，同时提高了性能。
- States 和 Props 可以无缝与 Observables 互相转换。
- 可对多个 Observables 直接进行各种操作，无论是 hooks 中生成的还是组件以外的。
- Observables 的操作是纯净的，类似于 Redux Observable 的 [Epic](https://redux-observable.js.org/docs/basics/Epics.html)，可以复用以及单独进行测试。
- 完善的测试，API 稳定。
