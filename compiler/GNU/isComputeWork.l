/*test.l*/
%{
#include <stdio.h>
#include "isComputeWork.tab.h"
void yyerror(char *);
%}
NUM [1-9]+[0-9]*|0
%%

{NUM}		                return NUM;
"+"							return ADD;
"-"							return SUB;
"*"							return MUL;
"/"							return DIV;
[a-zA-Z_$]+[a-zA-Z_$0-9]*	return VAR;
\n                          return CR;
[ \t]+                     /* ignore whitespace */;
.
%%

