var a = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
    ];

console.log(a);

for (var i = 0; i < a.length; i++) {
 for (var j = 0; j < a[i].length; j++)
    {
        a[i][j] = Math.min(
            //from top 
            i,
            //from bottom
            a.length-1 - i,
            //from left
            j,
            //from right
            a[i][j].length-1-j
            );
    }
    j  = 0;
}

console.log(a)


