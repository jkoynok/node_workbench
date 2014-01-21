var n = 0;

doloop:
do {
    //get counts
  
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var s= '000000000000' + n.toString();
    s = s.substring(s.length-10);
    //console.log('checking ' + s);
    
    for (var d in s) {
        counts[s[d]] += 1;
    }
    
    if (n % 100000 === 0) {
        console.log('checking ' + s);
        console.log(counts);
    
    }
    
    
    //break;
    
    for (var c in counts) {
        if (counts[c] != s[c]) {
            n+= 1;
            continue doloop;
        }
    }

    console.log('match! ' + n);
    break;
    //if any not match cont.

} while (n < 999999999)