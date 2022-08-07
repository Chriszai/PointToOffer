var isSymmetric = function (root) {
    if(!root) return true
    var dfs = function (r, l) {
        if (!r && !l) return true
        if (r && l) {
            if (r.val !== l.val) return false
            return dfs(l.right, r.left) && dfs(l.left, r.right)
        }
        return false
    }
    return dfs(root.left, root.right)
};