var getKthFromEnd = function (head, k) {
    var temp = head
    for (var i = 0; i < k; i++) {
        head = head.next
    }
    while (head) {
        temp = temp.next
        head = head.next 
    }
    return temp
};