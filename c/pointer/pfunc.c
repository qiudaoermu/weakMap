#include <stdio.h>

void print_value(int * p_int);
int * return_value();
int * return_value_safe();
void free_value_safe(int **pint);
int main(int argc, char const *argv[]) {
  int* plocal = return_value_safe();
  *plocal = 100;
  free_value_safe(&plocal);
  if(plocal == NULL) {
    printf("plocal 指向的内存被释放!\n");
  }
  return 0;
}
//向函数传递指针
void print_value(int * p_int)
{
  printf("传入的指针指向的值是: %d\n", *p_int );
  printf("传入的指针指向的地址是: %d\n", p_int );
}

// 返回一个指针
// 这种写法很危险，因为返回的是栈内存上的数据
int * return_value()
{
  int local = 200;
  return &local;
}
//函数返回一个指针
// 安全的返回，在堆上申请了一块内存，返回的是堆内存的地址
int * return_value_safe()
{
  int *pint = malloc(sizeof(int)); //申请内存，在c语言中,动态的内存都要手动进行管理，c语言没有
  *pint = 3000;
  return pint;
}
void free_value_safe(int **pint)
{
    free(*pint);
    *pint = NULL;
}
