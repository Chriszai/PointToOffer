var verifyPostorder = function (postorder) {
    var recur = function (postorder, i, j) {
        {
            if (i >= j) return true;
            var p = i;
            while (postorder[p] < postorder[j]) p++;
            var m = p;
            while (postorder[p] > postorder[j]) p++;
            return p == j && recur(postorder, i, m - 1) && recur(postorder, m, j - 1);
        }
    }
    return recur(postorder, 0, postorder.length - 1);
};