var reverseList = function (head) {
    var pre = null
    var cur = head;
    while (cur) {
        var tem = cur;
        cur = cur.next;
        tem.next = pre
        pre = tem
    }
    return pre
};