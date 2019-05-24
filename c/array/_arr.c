#include<stdio.h>
int main(int argc, char const *argv[]) {
  /* code */
  // 声明一个数组要指定长度
  double arr_double[5]; //声明了一个容纳5个double类型数据的数组
  //初始化方法1
  double arr_double1[5] = {1.0, 2.1, 3.3, 4.4, 5.5};
  //初始化方法2
  double arr_double2[] = {1.2, 2.3, 3.4}; // 能容纳3个数据的数组
  // 初始化方法3
  arr_double[0] = 0.1;
  arr_double[1] = 2.2;
  //访问数组
  double double_a = arr_double[0];
  arr_double[3] = 5.2;
  //输出一维数组
  for(int i=0;i<5;i++)
  {
    printf("%f\n", arr_double[i]);
  }
  return 0;
}
