// var s = 'abcdefghijklmnop';
// var rev = '';
// var l = s.length;
// for (var c in s) {
//     rev += s[l-1-c];
// }

// console.log(rev);

// //reverse words

// var s = 'the quick brown fox jumped over the lazy dog';
// var rev = '';
// var words = s.split(' ');
// for (var w in words) {
    
//     rev += words[words.length-1-w];
//     rev += w < words.length -1 ? ' ' : '';
// }

// console.log(rev);

// var t= '';

// s = s.split(' ')
// s.forEach(function(c) {
//     t = c + ' ' + t; 
// });

// console.log(t);


var s = new String('the  quick brown fox jumped over the lazy dog');

//for each nonspace swap it with the first space;

function strip(t) {
    //if (s.indexOf(' ') == -1)
     //   return;
    var s = t;
    for (var ci = 0; ci < s.length; ci+=1) {
             console.log(s[ci] + ' ' + s.indexOf(' '));
           //s[s.indexOf(' ')] = s[ci];        
            s[ci] = 'x';
            console.log(s[ci]);
    }
   
    return s;
}

console.log(strip(s));


console.log(s.indexOf(' '));
