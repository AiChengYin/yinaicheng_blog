# N阶方阵里所有数的和

```java
import java.util.Scanner;

/**
 * 给出n阶方阵里所有数，求方阵里所有数的和
 * 输入描述：输入有多个测试用例，每个测试用例第一个第一个整数n   n<=1000 表示方阵阶数为n
 * 接下来是n行的数字，每行n个数字用空格隔开
 * 输出描述：输出一个整数表示n阶方阵的和
 * @author: yinaicheng
 */
public class SquareMatrixAllNumberSum {

    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        while(true){
            int sum=0;
            /*一共多少行*/
            int n=Integer.parseInt(scanner.nextLine());
            for(int i=0;i<n;i++){
                /*对输入的内容转化为数组，"\\s+"匹配任意空白字符*/
                String[] split=scanner.nextLine().split("\\s+");
                /*计算n阶方阵里所有数的和*/
                for(int j=0;j<n;j++){
                    sum+=Integer.parseInt(split[j]);
                }
            }
            System.out.println(sum);
        }
    }

}
```