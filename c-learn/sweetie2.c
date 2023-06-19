#include <stdio.h>
#include <unistd.h>
void showName(int n) {
  sleep(1);
  printf("%d \n",n);
}
int main(void) {
 const int NUMBER = 22;
 int count;
 for (count = 1; count <= NUMBER; count++)
 showName(count);
 return 0;
}