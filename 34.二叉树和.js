var pathSum = function (root, target) {
    if (!root) return []
    var ans = []
    var dfs = function (node, val, cur) {
        if (!node) return

        if (val + node.val == target && !node.left && !node.right) {
            cur.push(node.val)
            ans.push(cur)
        }

        if (node.left || node.right) {
            cur.push(node.val)
            dfs(node.left, val + node.val, [...cur])
            dfs(node.right, val + node.val, [...cur])
        }
    }
    dfs(root, 0, [])
    return ans
};