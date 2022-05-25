var findNumberIn2DArray = function (matrix, target) {
    if(matrix.length == 0) return false
    var m = matrix[0].length
    var n = matrix.length
    for (var i = 0; i < n; i++) {
        if (target >= matrix[i][0] && target <= matrix[i][m - 1]) {
            for (var j = 0; j < m; j++) {
                if (matrix[i][j] == target) return true
            }
        }
        continue
    }
    return false
};