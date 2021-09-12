#!/bin/bash
var=’348\n37583’
var=${var//\n/ }    #这里是将var中的,替换为空格
echo $var
for element in $var
do
  echo 21
   echo $element
done
