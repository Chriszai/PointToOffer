var myPow = function (x, n) {
    var dfs = function (x, N) {
        if (N == 0) {
            return 1;
        }
        var y = dfs(x, Math.floor(N / 2));
        return N % 2 == 0 ? y * y : y * y * x;
    }
    var N = n;
    return N >= 0 ? dfs(x, N) : 1 / dfs(x, -N);
};