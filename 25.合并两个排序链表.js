var mergeTwoLists = function (l1, l2) {
    var dfs = function (h1, h2) {
        if (!h1) return h2
        if (!h2) return h1

        if (h1.val < h2.val) {
            h1.next = dfs(h1.next, h2)
            return h1
        } else {
            h2.next = dfs(h1, h2.next)
            return h2
        }
    }
    return dfs(l1, l2)
};