var levelOrder = function (root) {
    var arr = [], ans = [];
    //首先将根节点加入栈中
    if(!root) return [] 
    arr.push(root);
    //遍历二叉树
    while (arr.length != 0) {
        var tempNode = arr.shift()
        ans.push(tempNode.val)
        if (tempNode.left != null) {
            arr.push(tempNode.left);
        }
        if (tempNode.right != null) {
            arr.push(tempNode.right);
        }
    }
    return ans
};