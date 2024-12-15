# TLV编码解码信元

```java
import java.util.Scanner;

/**
 * TLV编码是按 Tag Length Value格式进行编码的，一段码流中的信元用tag标识，tag在码流中唯一不重复
 * length表示信元value的长度，value表示信元的值，码流以某信元的tag开头，tag固定占一个字节
 * length固定占两个字节，字节序为小端序，现给定tlv格式编码的码流以及需要解码的信元tag
 * 请输出该信元的value
 * 输入码流的16机制字符中，不包括小写字母，且要求输出的16进制字符串中也不要包含字符字母，码流字符串的最大长度不超过50000个字节
 * 输入描述：第一行为第一个字符串 ，表示待解码信元的tag，输入第二行为一个字符串， 表示待解码的16进制码流，字节之间用空格分割
 * 输出描述：输出一个字符串，表示待解码信元以16进制表示的value
 * @author: yinaicheng
 */
public class TlvEncodeParse {

    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        /*需要解码的信元tag*/
        String tag=scanner.nextLine();
        String data=scanner.nextLine();
        /*以空字符串分割*/
        String[] split=data.split("\\s+");
        for(int i=0;i<split.length;){
            int length=Integer.parseInt(split[i+2]+split[i+1],16);
            /*如果是要寻找的tag*/
            if(tag.equals(split[i])){
                StringBuilder stringBuilder=new StringBuilder();
                for(int j=i+3;j<i+3+length;j++){
                    stringBuilder.append(split[j]).append(" ");
                }
                System.out.println(stringBuilder.toString());
                break;
            }
            /*如果不是要寻找的tag*/
            else{
                i=i+3+length;
            }
        }

    }
}

```