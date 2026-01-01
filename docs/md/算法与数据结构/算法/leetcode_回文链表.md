# leetcode_回文链表

https://leetcode.cn/problems/palindrome-linked-list/description/

## 代码

```java
import java.util.ArrayList;
import java.util.Stack;

/*
234. 回文链表

给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 */
public class PalindromeLinkedList {

    public boolean isPalindromeAlpha(ListNode head) {
        ArrayList arrayList=new ArrayList<>();
        while(head!=null){
            arrayList.add(head.val);
            head=head.next;
        }
        int i=0;
        int j=arrayList.size()-1;
        while(i<j){
            if(!arrayList.get(i).equals(arrayList.get(j))){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    public boolean isPalindromeBeta(ListNode head) {
        Stack<Integer> stack = new Stack<>();
        ListNode cur = head;

        // 1. 入栈
        while (cur != null) {
            stack.push(cur.val);
            cur = cur.next;
        }

        // 2. 再次遍历比较
        cur = head;
        while (cur != null) {
            if (cur.val != stack.pop()) {
                return false;
            }
            cur = cur.next;
        }

        return true;
    }

    public boolean isPalindromeGama(ListNode head) {
        if (head == null || head.next == null) {
            return true;
        }

        // 1. 快慢指针找中点
        ListNode slow = head;
        ListNode fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. 反转后半部分
        ListNode secondHalf = reverse(slow.next);

        // 3. 比较前后两部分
        ListNode p1 = head;
        ListNode p2 = secondHalf;
        while (p2 != null) {
            if (p1.val != p2.val) {
                return false;
            }
            p1 = p1.next;
            p2 = p2.next;
        }

        return true;
    }

    // 反转链表
    private ListNode reverse(ListNode head) {
        ListNode prev = null;
        while (head != null) {
            ListNode nextTemp = head.next;
            head.next = prev;
            prev = head;
            head = nextTemp;
        }
        return prev;
    }

    public static void main(String[] args) {
        ListNode listNode1=new ListNode(1);
        ListNode listNode2=new ListNode(3);
        ListNode listNode3=new ListNode(2);
        ListNode listNode4=new ListNode(1);
        listNode1.next=listNode2;
        listNode2.next=listNode3;
        listNode3.next=listNode4;
        PalindromeLinkedList palindromeLinkedList=new PalindromeLinkedList();
        System.out.println(palindromeLinkedList.isPalindromeGama(listNode1));
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