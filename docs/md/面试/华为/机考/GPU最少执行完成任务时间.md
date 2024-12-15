# GPU最少执行完成任务时间

```java
import java.util.Scanner;
/**
 * 为了充分发挥GPU算力，需要尽可能多的将任务交给GPU执行，现在有一个任务数组，数组元素表示在这1s内新增的任务个数，且每秒都有新增任务
 * 假设GPU最多一次执行n个任务，一次执行耗时1s，在保证Gpu不空闲的情况下，最少需要多长时间执行完成。
 * 输入描述：第一个参数为gpu最多执行的任务个数，取值范围1~10000，第二个参数为任务数组的长度，取值范围1~10000，第三个参数为任务数组，数字范围1~10000
 * 输出描述：执行完所有任务需要多少秒
 * @author: yinaicheng
 */
public class GpuMinExecuteTime {

    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        /*gpu每次最多执行任务*/
        int gpuExecuteMostTaskEveryTime=Integer.parseInt(scanner.nextLine().trim());
        /*任务数组长度*/
        int taskArrayLength=Integer.parseInt(scanner.nextLine().trim());
        /*任务数组*/
        String[] taskArray=scanner.nextLine().split(" ");
        int[] taskIntArray=new int[taskArrayLength];
        /*任务字符串数组转化为整型数组*/
        for(int i=0;i<taskArrayLength;i++){
            taskIntArray[i]=Integer.parseInt(taskArray[i]);
        }
        /*计算需要多少秒，初始化为0*/
        int seconds=0;
        /*剩余未执行的任务（待下一秒要执行的）*/
        int remainTask=0;
        for(int taskInt:taskIntArray){
            /*如果当前要执行的任务+剩余任务>gpu每次最多执行任务*/
            if((taskInt+remainTask>gpuExecuteMostTaskEveryTime)){
                /*剩余任务变更*/
                remainTask=taskInt+remainTask-gpuExecuteMostTaskEveryTime;
            }
            /*如果前要执行的任务+剩余任务<=gpu每次最多执行任务，剩余未执行的任务清零*/
            else {
                remainTask=0;
            }
            seconds++;
        }
        /*如果有剩余未执行的任务*/
        while (remainTask>0){
            remainTask=remainTask-gpuExecuteMostTaskEveryTime;
            seconds++;
        }
        System.out.println(seconds);
        scanner.close();
    }

}
```