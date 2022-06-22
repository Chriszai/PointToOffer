var cuttingRope = function (n) {
    if(n == 2) return 1
    if(n == 3) return 2
    var i = Math.floor(n / 3)
    var j = n % 3
    if(j == 0) return Math.pow(3,i)
    if(j == 1 ) return Math.pow(3,i-1) * 4
    if(j == 2) return Math.pow(3,i) * 2
};