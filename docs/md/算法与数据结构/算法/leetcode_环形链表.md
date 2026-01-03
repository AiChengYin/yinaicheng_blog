# leetcode_环形链表

https://leetcode.com/problems/linked-list-cycle/description/

## 代码

```java
import java.util.HashSet;
/**

 141. 环形链表
 
 给你一个链表的头节点 head ，判断链表中是否有环。

 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

 如果链表中存在环 ，则返回 true 。 否则，返回 false 。

 */
public class LinkedListCycle {

    public boolean hasCycle(ListNode head) {
        if(head==null){
            return false;
        }
        /*通过哈希set*/
        HashSet<ListNode> listNodeHashSet=new HashSet<>();
        while(head!=null){
            if(listNodeHashSet.contains(head)){
                return true;
            }
            listNodeHashSet.add(head);
            /*关键：指针前进*/
            head=head.next;
        }
        return false;
    }

    public static void main(String[] args) {
        ListNode listNode1=new ListNode(3);
        ListNode listNode2=new ListNode(2);
        ListNode listNode3=new ListNode(0);
        ListNode listNode4=new ListNode(-4);
        listNode1.next=listNode2;
        listNode2.next=listNode3;
        listNode3.next=listNode4;
        listNode4.next=listNode2;
        LinkedListCycle linkedListCycle=new LinkedListCycle();
        System.out.println(linkedListCycle.hasCycle(listNode1));
    }

}

class ListNode{
    int val;
    ListNode next;
    ListNode(int x){
        val=x;
        next=null;
    }
}
```