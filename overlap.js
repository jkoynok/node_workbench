

var t1 = [ [0,0],[0,10],[10,10],[10,0] ];
var t2 = [ [5,0],[5,5],[15,5],[15,0] ];


function GetSlope(a,b) {
    if (a[0] - b[0] == 0) return 0;
    return (a[1]-b[1]) / (a[0] - b[0]);
}

//console.log(GetSlope(t1[0],t1[2]));

//check palindrome

function IsPalindrome(s) {
        
    var l = s.length -1;
    //foreach each pair
    for (var c in s) {
        if (s[c] !== s[l-c]) {
            return false;
        }
    }

    return true;

}

console.log(IsPalindrome('abbabba'));


function Reverse(s) {
    var r ='';
    for(var c in s) {
          r+= s[s.length-1-c]; 
    }    
    return r;
}

console.log(Reverse('abcdefg'));


function RemoveChar(s,c) {
    var r = ''; 
    for(var x in s) {
        if (s[x] !== c) {
            r+= s[x];
        }
    }
        return r;        
}    

console.log(RemoveChar('jkoynok','k'));