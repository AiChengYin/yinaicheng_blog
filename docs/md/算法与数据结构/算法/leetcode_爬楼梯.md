# leetcode_爬楼梯

https://leetcode.cn/problems/climbing-stairs/

## 代码

```java
/**
 * 70. 爬楼梯

 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */
public class ClimbingStairs {

    /*
        爬到第 n 阶

        最后一步只有 两种可能：

        从 n-1 阶爬 1 步上来

        从 n-2 阶爬 2 步上来

        👉 状态转移公式自然出现

        f(n) = f(n-1) + f(n-2)

        这其实就是一个 斐波那契数列问题。
     */
    public int climbStairs(int n) {
        if(n<=2){
            return n;
        }
        int[] dp=new int[n+1];
        dp[1]=1;
        dp[2]=2;
        for(int i=3;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-2];
        }
        return dp[n];
    }

    public static void main(String[] args) {
        ClimbingStairs climbingStairs=new ClimbingStairs();
        System.out.println(climbingStairs.climbStairs(5));
    }

}
```