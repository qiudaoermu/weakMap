%{
   int key=0;
   int mark=0;
%}

ALPHA [a-zA-Z]
MARK  {ALPHA}+[a-zA-Z0-9_]*
KEY   if|else|int|double|return|class

%%
{KEY}					printf("KEY ");key++;
{MARK}				printf("MARK "); mark++;
\n						printf("\n");
.

%%
int main(int argc, char **argv)
{
  yylex();
  printf("MARK=%d  KEY=%d",mark,key);
  yywrap();
}
int yywrap()
{
	return 1;
}
