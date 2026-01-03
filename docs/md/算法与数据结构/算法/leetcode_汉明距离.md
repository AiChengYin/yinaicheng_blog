# leetcode_汉明距离

https://leetcode.cn/problems/hamming-distance/description/

## 代码

```java
/*
两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

示例 1：

输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
示例 2：

输入：x = 3, y = 1
输出：1
 */
public class HammingDistance {

    public int hammingDistanceAlpha(int x, int y) {
        // 1. 异或得到不同位
        int xor = x ^ y;
        // 2. 统计 1 的个数
        return Integer.bitCount(xor);
    }

    /*
    101
001
得到
001，找到1个1

下一个
10
01
得到
00，没有找到1

下一个
1
1
得到
1，找到1个1
     */
    public int hammingDistance(int x, int y) {
        int xor = x ^ y;
        int count = 0;

        while (xor != 0) {
            System.out.println(Integer.toBinaryString(xor));
            /* & 如果相对应位都是1，则结果为1，否则为0*/
            if ((xor & 1) == 1) {
                count++;
            }
            xor >>= 1;
            System.out.println(Integer.toBinaryString(xor));
        }

        return count;
    }

    public static void main(String[] args) {
        HammingDistance hammingDistance=new HammingDistance();
        System.out.println(hammingDistance.hammingDistance(1,4));
    }

}
```