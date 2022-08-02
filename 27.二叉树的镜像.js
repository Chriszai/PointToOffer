var mirrorTree = function (root) {
    var dfs = function (root) {
        if (!root) return null
        var tem = root.right
        root.right = dfs(root.left)
        root.left = dfs(tem)
        return root
    }
    return dfs(root)
};