## 原理

- goyacc 的原理是用 go,把 **xxx.l** 编译成 **xxx.go** , 同理 bison 一样,yacc是编译的前端部分。

- 需要一个中间语言（c 或者 go）

- 后台使用gcc或者llvm，再编译成机器可执行语言
