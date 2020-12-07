#include <stdio.h>
#include <stdbool.h>
char* myname = " 极客时间 ";
void showName() {
  char* num1 = " 极客邦";
  char* num2 = "  ";
  bool boole = num1 > num2;
  printf("%d\n",boole);
  if (num1 > num2) {
    printf("%d\n", 1);
  } else {
    printf("%d\n", 2);
  }
  
}
int main(){
   showName();
   return 0;
}
