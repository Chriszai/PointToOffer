var copyRandomList = function (head, cachedNode = new Map()) {
    console.log(cachedNode)
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, { val: head.val })
        cachedNode.get(head).next = copyRandomList(head.next, cachedNode)
        cachedNode.get(head).random = copyRandomList(head.random, cachedNode)
    }
    return cachedNode.get(head);
}