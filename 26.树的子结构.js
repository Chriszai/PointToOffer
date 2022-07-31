var isSubStructure = function (A, B) {

    let result = false

    if (A && B) {
        if (A.val === B.val) result = treeAHasTreeB(A, B)
        if (!result) result = isSubStructure(A.left, B)
        if (!result) result = isSubStructure(A.right, B)
    }

    return result
};

const treeAHasTreeB = (R, B) => {
    // B遍历完了，说明R包含和树B一样的结构
    if (!B) return true
    // R遍历完了，但是B还没有遍历完，那么B肯定不是R的子结构
    if (!R) return false
    if (R.val !== B.val) return false

    return treeAHasTreeB(R.left, B.left) && treeAHasTreeB(R.right, B.right)
}