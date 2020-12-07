#!/bin/bash

a=0.2  
b=0.1  
echo "scale=100;$a + $b"|bc 

c=$(awk 'BEGIN{print 7.01*5-4.01 }')
echo $c