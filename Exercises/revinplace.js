
function revinplace(s) {
    
    for (var c in s) {
        var placeholder = s[c];
        s[c] = s[s.length-c];
        s[s.length-c] = placeholder;
    }
    
    return s;
    
}

console.log(revinplace("abcdefghijklmnop"));

var t = 'the quick brown fox jumped over the lazy dog';

