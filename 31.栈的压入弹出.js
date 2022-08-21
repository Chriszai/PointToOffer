var validateStackSequences = function (pushed, popped) {
    var arr = []
    for (var i = 0; i < popped.length; i++) {
        var cur = popped[i]
        const isLargeNumber = (element) => element == cur;
        var index = pushed.findIndex(isLargeNumber)
        if (index != -1) {
            arr = arr.concat(pushed.splice(0, index + 1))
        }
        console.log(arr)
        if (cur != arr.pop()) return false
    }
    return true
};