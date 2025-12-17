# leetcode_对称二叉树

https://leetcode.cn/problems/symmetric-tree/?envType=problem-list-v2&envId=2cktkvj

## 代码

```java
/**
 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 */
public class SymmetricTree {

    public boolean isSymmetric(TreeNode root) {
        /*空树对称*/
        if(root==null){
            return true;
        }
        return isSymmetricLeftAndRight(root.left,root.right);
    }

    public boolean isSymmetricLeftAndRight(TreeNode treeNode1,TreeNode treeNode2){
        if(treeNode1==null && treeNode2==null){
            return true;
        }
        /*两者只有一个为空，那一定不对称*/
        if (treeNode1 == null || treeNode2 == null) {
            return false;
        }
        if(treeNode1.val!=treeNode2.val){
            return false;
        }
        return isSymmetricLeftAndRight(treeNode1.left,treeNode2.right) && isSymmetricLeftAndRight(treeNode1.right,treeNode2.left);
    }

    public static void main(String[] args) {
        TreeNode treeNode1=new TreeNode(1);
        TreeNode treeNode2=new TreeNode(2);
        TreeNode treeNode3=new TreeNode(3);
        treeNode1.left=treeNode2;
        treeNode1.right=treeNode3;
        System.out.println(new SymmetricTree().isSymmetric(treeNode1));
    }

}

class TreeNode{
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(){
    }
    TreeNode(int val){
        this.val=val;
    }
    TreeNode(int val,TreeNode left,TreeNode right){
        this.val=val;
        this.left=left;
        this.right=right;
    }
}
```