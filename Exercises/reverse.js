var s = 'abcdefghijklmnop';
var rev = '';
var l = s.length;
for (var c in s) {
    rev += s[l-1-c];
}

console.log(rev);

//reverse words

var s = 'the quick brown fox jumped over the lazy dog';
var rev = '';
var words = s.split(' ');
for (var w in words) {
    
    rev += words[words.length-1-w];
    rev += w < words.length -1 ? ' ' : '';
}

console.log(rev);

var t= '';

s = s.split(' ')
s.forEach(function(c) {
    t = c + ' ' + t; 
});

console.log(t);