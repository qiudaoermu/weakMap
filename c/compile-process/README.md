编译过程是分为四个阶段进行的，
即预处理(也称预编译，Preprocessing)、
编译(Compilation)
汇编 (Assembly)
连接(Linking)。
1.1 预处理
gcc -E test.c -o test.i 或 gcc -E test.c
就是将stdio.h 文件中的内容插入到test.c中了
1.2 编译为汇编代码(Compilation)
预处理之后，可直接对生成的test.i文件编译，生成汇编代码：
gcc -S test.i -o test.s
1.3
生成二进制文件
gcc -c test.s -o test.o
1，4
连接
gcc test.o -o test
