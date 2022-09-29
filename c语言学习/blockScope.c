#include <stdio.h>
char* myname = "极客时间";
void showName() {
  printf("%s \n",myname);
  if(0){
    char* myname = "极客邦";
  }
}

int main(){
   showName();
   return 0;
}