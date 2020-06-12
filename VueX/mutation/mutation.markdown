## mutation

唯一改变state方式。

Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)

传参
* 单个参数
* 对象
* 多个参数

多个参数，需要改变：对象风格的提交方式

### 使用常量替代 Mutation 事件类型

### Mutation 必须是同步函数