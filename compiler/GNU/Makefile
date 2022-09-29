all: clean calc


calc: calc.l calc.y
	bison -d calc.y
	flex calc.l
	cc -o $@ calc.tab.c lex.yy.c -lm

clean:
	rm -f calc \
	lex.yy.c calc.tab.c calc.tab.h
