 var dist = function(p1, p2) {
     return Math.sqrt(Math.pow(p1[0] - p2[0], 2)+ Math.pow(p1[1] - p2[1],2));
 };

 var points = [
     [1, 4],
     [5, 6],
     [5, 5],
     [9, 0],
     [3, 3],
     [3.5,3.5],
     [1.2,1]
 ];

 var list = [];

 for (var p1 in points) {
     for (var p2 in points) {
         //skip same point
         if (points[p1][0] == points[p2][0] && points[p1][1] == points[p2][1]) {
                console.log('skipping ' + points[p2][0] + ' ' + points[p2][1]);
             continue;
         }
         
         list.push({
             p1: points[p1],
             p2: points[p2],
             dist: dist(points[p1], points[p2])
         });
         
     }
 }

 list = list.sort(function(i, j) {
     return -(j.dist - i.dist);
 });

console.log(list);

 console.log(list.splice(0, 3));