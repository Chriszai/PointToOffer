var movingCount = function (m, n, k) {
    let arr = new Array(m).fill(false).map(_ => new Array(n).fill(false))
    var ans = 0;
    arr[0][0] = true
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var j1 = Math.floor(j / 10) + j % 10
            if (j == 100) j1 = 1
            var i1 = Math.floor(i / 10) + i % 10
            if (i1 == 100) i1 = 1
            if (i1 + j1 <= k && arr[i][j]) {
                ans++
                if (i + 1 < m) arr[i + 1][j] = true
                if (i - 1 >= 0) arr[i - 1][j] = true
                if (j + 1 < n) arr[i][j + 1] = true
                if (j - 1 >= 0) arr[i][j - 1] = true
            }
        }
    }
    return ans
};