package dataConstructor;

import java.lang.ref.SoftReference;
import java.lang.reflect.Array;

public class Data {
    public static void main(String arg[]){
        String str1 = "abc";
        String str2 = "abc";
        System.out.println(str1==str2);  //true
        String[] str = str1.split("b");
        System.out.println(str[0]);
        System.out.println("Hello World!");
    }
}

