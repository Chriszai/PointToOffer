var reversePrint = function (head) {
    var arr = []
    var dps = function (head) {
        if (!head) return
        arr.unshift(head.val)
        dps(head.next)
    }
    dps(head)
    return arr
};