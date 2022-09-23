#!/bin/bash

echo "Shell 传递参数实例！";
echo "执行的文件名：$0";

bison -d $1.y
flex -o $1.yy.c $1.l 
gcc -o $1 $1.tab.c $1.yy.c