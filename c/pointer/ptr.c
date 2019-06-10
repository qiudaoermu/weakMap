#include <stdio.h>
int main(int argc, char const *argv[]) {
  int a = 100;
  int * ptr_int1 = &a;
  int b= *ptr_int1;
  printf("a = %d,b =%d,ptr_int1 = %d, *ptr_int1 = %d\n",a, b, (int)ptr_int1, *ptr_int1);
  int ptr_int2 = NULL;
  if (ptr_int2==NULL) {
    printf("a = %d\n",a);
  }
  return 0;
}
