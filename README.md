 这是关于自己对 REACT-router v4+ 版本学习理解做的dome

- dome1 是关于基本的使用.
    1. exact 作用的让定义了这个props的组件仅在url等于path值的时候显示.
    1. match 在 this.props 中
- dome2 是关于url参数的获取.
    1. ![avatar](./domeImg/1.png) 官方文档说:可以使用正则表达式来控制应匹配哪些参数值.
    2. ![avatar](./domeImg/2.png)        参数可以使用正则表示式匹配,也就是说,只要当参数为:asc 或者 desc 的时候 我们的组件ComponentWithRegex 才显示, direction 可以随时设置,这里并不是一个函数.
- 重定向

	1.	