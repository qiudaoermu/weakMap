/*test.y*/
%{
#include <stdio.h>
#include <string.h>
int yylex(void);
void yyerror(char *);
%}

%token NUM ADD SUB MUL DIV VAR CR

%%
       line_list: line
                | line_list line
                ;
				
	       line : expression CR  {printf("YES\n");}

      expression: term 
                | expression ADD term
				| expression SUB term
                ;

            term: single
				| term MUL single
				| term DIV single
				;
				
		  single: NUM
				| VAR
				;
%%
void yyerror(char *str){
    fprintf(stderr,"error:%s\n",str);
}

int yywrap(){
    return 1;
}
int main()
{
    yyparse();
}