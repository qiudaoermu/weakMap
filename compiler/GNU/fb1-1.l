/* 统计输入字符串*/
%{
  int chars = 0;
  int words = 0;
  int lines =0;

%}

%%
[a-zA-Z]+ {
		words++;
		chars += strlen(yytext);
          }

\n        {     chars++; lines++;}

.         {     chars++;     }

%%


int main(int args, char **argv)
{
	yylex();
	printf("lines=%6d words=%6d chars=%6d\n", lines, words, chars);
	yywrap();
	return 0;
}
int yywrap()
{
	return 1;
}


