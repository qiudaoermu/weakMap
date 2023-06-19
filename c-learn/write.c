#include ＜stdio.h＞
#include ＜errno.h＞
#include ＜sys/types.h＞
#include ＜sys/stat.h＞
#include ＜fcntl.h＞
#include ＜unistd.h＞
#include ＜string.h＞
int main(void) {
  int fd;     /*文件描述符定义*/
  char *buffer;
  char show[80];
  int len1,len;
  buffer = "It is a test!";
  if((fd = open("test1.c",O_CREAT | O_RDWR)) == -1 ) {  /*文件的打开*/
        printf("cannot open file !\n");
        exit(0);
  }
  len1 = write(fd,buffer,strlen(buffer));    /*对文件进行写操作*/
  lseek(fd, 3, SEEK_SET);    /*文件指针的移动*/
  len = read(fd,show,80);    /*对文件进行读操作*/
  show[len + 1]='\0';   /*请读者思考, 没有该行, 会出现什么情况？*/
  printf("file is:%s, len is %d.\n",show,len);
  close(fd);     /*关闭文件*/
  return 0;
}