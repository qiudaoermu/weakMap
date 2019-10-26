package horse;

import java.util.ArrayList;
import java.util.Arrays;
import java.lang.String;

public class Test {

    //完成 main 方法
    public static void main(String[] args) {
        Test test = new Test();
        int[] scores2 = {89, -23, 64, 91, 119, 52, 73};
        ArrayList r = test.getThr(scores2);
        System.out.println(r);


    }

    //定义方法完成成绩排序并输出前三名的功能
    public ArrayList getThr(int[] scores) {
        ArrayList<Integer> t = new ArrayList<Integer>();
        Arrays.sort(scores);
        int num = 0;

        for (int i = scores.length - 1; i >= 0; i--) {
            if (scores[i] > 100 || scores[i] < 0) {
                continue;
            }
            num++;
            t.add(scores[i]);
            if(num>=3){
                break;
            }
        }
        return t;
    }
}









