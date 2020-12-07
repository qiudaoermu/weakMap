#include <stdio.h>
char* myname = " 极客时间 ";
void showName() {
  printf("%s %d \n",myname, 4);
  if(1) {
    printf("%s\n", myname);
    printf("%s\n", youranme);
    char* myname = " 极客邦 ";
    char* youranme = "kk";
    printf("%s %d \n",myname,7);
  }
  printf("%s %d \n",myname, 9);
}
int main(){
   showName();
   return 0;
}
