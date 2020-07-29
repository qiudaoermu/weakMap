package horse;

import java.util.ArrayList;
import java.util.Arrays;

public class Horse {
    static int L = 0;
    public static void calLetterList(ArrayList<String> l, ArrayList<String> result) {
        if (result.size() == l.size()) {
            System.out.println(result);
            return;
        }

        for (String letter : l) {
            ArrayList<String> newResult = (ArrayList<String>) result.clone();
            newResult.add(letter);
            calLetterList(l, newResult);
        }
    }

    static int sum = 0;

    Until until = new Until();
    ArrayList Arr = until.create_Arr();
//    public static void map(ArrayList t){
//        System.out.println(arr);
//    }

    public static void main(String[] args) {
        ArrayList<String> l = new ArrayList<>(Arrays.asList("a", "b"));
        calLetterList(l, new ArrayList<>());
       // map();
    }

}
