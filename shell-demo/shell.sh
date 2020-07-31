#!/bin/bash
# echo "hello world"
#
# str="
# i
# like
# you
# csdn
# "
# arr=(${str//\n/ })
#
# for s in ${arr[@]}
# do
#     echo $s
# done

# fp() {
# 	str="$(lsof -t -i :$1)";
# 	arr=(${str//\n/ })
# 	for s in ${arr[@]}
# 	do
# 	   echo $s
# 	   echo 1
# 	   # kill $s;
# 	done
# };
# fp
var=’348\n37583’
var=${var//\n/ }    #这里是将var中的,替换为空格
echo $var
for element in $var
do
  echo 21
   echo $element
done
