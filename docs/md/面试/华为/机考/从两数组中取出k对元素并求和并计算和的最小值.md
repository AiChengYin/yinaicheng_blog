# 从两数组中取出k对元素并求和并计算和的最小值

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
/**
 * 给定两个整数数组array1 array2，数组元素按升序排列
 * 假设从arr1 arr2中分别取出一个元素，可构成一对元素，现在需要取出k对元素，并对取出的所有元素求和，计算和的最小值
 * 注意：两对元素对应arr1 arr2的下标是相同的，视为同一对元素
 * 输入描述：输入两行数组arr1 arr2，每行首个数字为数组大小size   0<size<=100，arr1，2中的每个元素   0< <1000
 * 接下来一行，正整数k   0<k<=arr1.size * arr2.size
 * 输出描述：满足要求的最小值
 * @author: yinaicheng
 */
public class TwoArrayElementSumMinValue {

    public static void main(String[] args) {
        /*获取用户输入的数据*/
        Scanner scanner=new Scanner(System.in);
        /*用户输入的数组1*/
        int[] arr1=getArray(scanner.nextLine());
        /*用户输入的数组2*/
        int[] arr2=getArray(scanner.nextLine());
        /*用户输入的需要取出的k对元素*/
        int k=scanner.nextInt();
        /*初始化总和*/
        int sum=0;
        ArrayList<Integer> list=new ArrayList<>();
        /*找出所有的总和*/
        for(int i:arr1){
            for(int j:arr2){
                list.add(i+j);
            }
        }
        /*列表转数组*/
        Integer[] resultArray=new Integer[list.size()];
        list.toArray(resultArray);
        /*对元素和进行排序*/
        Arrays.sort(resultArray);
        /*取出k对元素，并对取出的所有元素求和*/
        for(int i=0;i<k;i++){
            sum+=resultArray[i];
        }
        System.out.println(sum);
        scanner.close();
    }

    /**
     * 将用户输入内容转成数组
     * @param line 用户输入内容
     * @return 数组
     */
    private static int[] getArray(String line){
        /*"\\s+"匹配任意空白字符*/
        String[] splitLineStringArray=line.split("\\s+");
        /*初始化int数组*/
        int[] splitLineIntArray=new int[splitLineStringArray.length];
        for(int i=0;i<splitLineStringArray.length;i++){
            splitLineIntArray[i]=Integer.parseInt(splitLineStringArray[i]);
        }
        return splitLineIntArray;
    }

}

```