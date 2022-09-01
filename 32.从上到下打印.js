var levelOrder = function(root) {
    var arr = [], ans = []
    if (root) {
        arr.push(root)
        ans.push([root.val])
    }
    else return []
    while (arr.length != 0) {
        var cur = []
        var n = arr.length
        for (var i = 0; i < n; i++) {
            if (arr[i].left) {
                arr.push(arr[i].left)
                cur.push(arr[i].left.val)
            }
            if (arr[i].right) {
                arr.push(arr[i].right)
                cur.push(arr[i].right.val)
            }
        }
        arr.splice(0,n)
        ans.push(cur)
    }
    ans.pop()
    return ans
};