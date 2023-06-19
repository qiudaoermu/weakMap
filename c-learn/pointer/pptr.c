#include<stdio.h>
//指针的指针
int main(int argc, char const *argv[]) {
  // 二级指针
  int var = 500;
  int* ptr;
  ptr = &var;
  int** pptr; //二级指针
  pptr = &ptr; //二级指针指向了一级指针
  printf("var = %d\n", var);
  printf("*ptr = %d\n", *ptr);
  printf("**pprt = %d\n", ** pptr);
  return 0;
  
}
