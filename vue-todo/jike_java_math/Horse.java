public class Horse {
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

  public static void main(String[] args) {
    ArrayList<String> l = new ArrayList<>(Arrays.asList("a", "b", "c", "d", "e"));
    calLetterList(l, new ArrayList<>());
  }
}
