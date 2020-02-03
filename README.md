# 1.1 vuex基本使用


## 组件
- 首先，组件dispatch(action)
- 最后，state改变组件显示

## Action
- mutation不能操作异步行为,它只能改变本地数据；而 Action可以包含任意异步操作,比如进行网络请求数据操作。

## actions，mutations，state
- state储存store中的值
- mutations改变state
- actions确认(commit)mutations中对应的方法

## getters
- 相当于计算属性，计算或限制state中的值

## mapActions
- 简化代码，省略多个action的dispatch，直接建立和store中action的对应关系
- ...mapActions，mapActions函数返回的是一个对象，如果还要加其他方法，就需要把mapActions返回的集合展开