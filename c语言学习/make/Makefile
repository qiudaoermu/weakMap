main:main.o hello.o
	gcc -o main main.o hello.o
main.o:main.c
	gcc -c main.c
hello.o:hello.c
	gcc -c hello.c
clean:
	rm -f hello.o main.o main
