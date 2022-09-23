%{
package main

import (
	"flag"
	"fmt"
)

var (
	c    byte
	src  string
	in   []byte
	un   []byte
	mark int
)

func lex() (s string) {
%}

%yyn next()
%yyc c
%yym fmt.Printf("\tstate accepts: %q\n", in); mark = len(in)

%%
	in = in[:0]
	mark = -1

\0
	return "EOF"

a([bcd]*z([efg]*z)?)?
	return fmt.Sprintf("match(%q)", in)

%%
	if mark >= 0 {
		if len(in) > mark {
			unget(c)
			for i := len(in)-1; i >= mark; i-- {
				unget(in[i])
			}
			next()
		}
		in = in[:mark]
		goto yyAction // Hook: Execute the semantic action of the last matched rule.
	}

	switch n := len(in); n {
	case 0: // [] z
		s = fmt.Sprintf("%q", c)
		next()
	case 1: // [x] z
		s = fmt.Sprintf("%q", in[0])
	default: // [x, y, ...], z
		s = fmt.Sprintf("%q", in[0])
		unget(c) // z
		for i := n - 1; i > 1; i-- {
			unget(in[i]) // ...
		}
		c = in[1] // y
	}
	return s
}

func next() {
	if len(un) != 0 {
		c = un[len(un)-1]
		un = un[:len(un)-1]
		return
	}

	in = append(in, c)
	if len(src) == 0 {
		c = 0
		return
	}

	c = src[0]
	fmt.Printf("\tnext: %q\n", c)
	src = src[1:]
}

func unget(b byte) {
	un = append(un, b)
}

func main() {
	flag.Parse()
	if flag.NArg() > 0 {
		src = flag.Arg(0)
	}
	next()
	for {
		s := lex()
		fmt.Println(s)
		if s == "EOF" {
			break
		}
	}
}