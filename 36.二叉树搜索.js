var treeToDoublyList = function(root) {
    if(!root){
        return null;
    }
    let prev = null;
    let head =null;
    function dfsHelper(root){
        if(!root){
            return null;
        }
        dfsHelper(root.left);
        /*
            中序(left,cur,right)
        */
        //说明是第一个节点
        if(!head){
            head = new Node(root.val);
            prev = head;
        } else {
            let newNode = new Node(root.val);
            prev.right = newNode;
            newNode.left = prev;
            prev = newNode;
        }
        dfsHelper(root.right);

    }
    dfsHelper(root);
    //prev是最后一个节点
    head.left = prev;
    prev.right = head;
    return head;
};