## example.l，flex 文件执行

```
flex example.l

gcc lex.yy.c -o example

./example
```
新手框架
```
%{

%}

%%

%%
int main(int argc, char **argv)
{
  yylex()
  return 0;
}
int yywrap()
{
	return 1;
}

```

## example.y bison 文件执行

```
bison --yacc -dv $1.y
```

## example.l, example.y flex bision 文件执行

```
./f-b.sh example
./example
```

### isDefined

根据输入的变量检测，是否是编程语言的保留字

检测

### isComputeWork

检测一个计算式是否合法

```
// 合法:
a + 3
// 不合法:
a++3
```

### variable

检测一个变量是否合理

```
// 合法：
double a_test;
int a=5;
double b=2.33;
char c='t';

// 不合法：
char c=1;
```

### calc 计算器

```
$ ./calc
$ 1 + 2 * 3
输出 7
```
