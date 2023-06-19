#include "compress_png.h"
int main(int argc, char *argv[])
{
  read_png(argv[1]);
  write_png(argv[2]);
  return 0;
}