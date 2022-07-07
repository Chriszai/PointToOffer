var deleteNode = function (head, val) {
    var pre = head;
    if(head.val == val) return pre.next
    while (head.val != val) {
        var last = head;
        head = head.next
    }
    last.next = head.next
    return pre
};