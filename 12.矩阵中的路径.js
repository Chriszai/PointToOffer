/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function (board, word) {
    var n = board.length, m = board[0].length
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (dfs(board, i, j, 0) == true) return true
        }
    }
    function dfs(board, i, j, l) {
        if (i >= n || j >= m || i < 0 || j < 0) return false
        if (board[i][j] !== word.charAt(l)) return false
        console.log(board[i][j])
        console.log(i, j)
        if (l == word.length - 1) return true
        board[i][j] = '\0';
        var bool = dfs(board, i - 1, j, l + 1) || dfs(board, i + 1, j, l + 1) || dfs(board, i, j + 1, l + 1) || dfs(board, i, j - 1, l + 1)
        board[i][j] = word.charAt(l)
        return bool
    }
    return false
};