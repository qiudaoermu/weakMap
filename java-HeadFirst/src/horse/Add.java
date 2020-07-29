package horse;

public class Add {

    public static void main(String arg[]) {
        int sum = 0;
        int number[] = new int[100];
        for (int i = 1; i <= 100; i++) {
            number[i - 1] = i;
            System.out.println(number[i-1]);
            sum += number[i - 1];
        }
        System.out.println("sum=" + sum);
    }
}
