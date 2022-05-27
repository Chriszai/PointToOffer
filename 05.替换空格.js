var replaceSpace = function (s) {
    var sb = ''
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == ' ') sb = sb + '%20'
        else sb = sb + s.charAt(i)
    }
    return sb
};