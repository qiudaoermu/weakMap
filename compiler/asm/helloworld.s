	.section	__TEXT,__text,regular,pure_instructions
	.build_version macos, 12, 0	sdk_version 12, 1
	.globl	_main                           ## -- Begin function main
	.p2align	4, 0x90
_main:                                  ## @main
    .cfi_startproc                     ## 表示函数的开头。会初始化一些内部的数据结构，发出架构依赖的初始CFI 指令
## %bb.0:
    pushq    %rbp
    .cfi_def_cfa_offset 16
    .cfi_offset %rbp, -16
    movq    %rsp, %rbp
    .cfi_def_cfa_register %rbp
    subq    $16, %rsp
    movl    $0, -4(%rbp)
    leaq    L_.str(%rip), %rdi
    movb    $0, %al
    callq    _printf
    xorl    %eax, %eax
    addq    $16, %rsp
    popq    %rbp
    retq
    .cfi_endproc                ## 结束函数
	.section	__TEXT,__cstring,cstring_literals
L_.str:                                 ## @.str
	.asciz	"hello world!\n"

.subsections_via_symbols


