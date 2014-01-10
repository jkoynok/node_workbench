
var i = 0
var list = [];

for(var i=0; i<=9; i+=1)
{
    list.push({ data : i, node: list[((i === 0) ? null : i-1)] });    
}

console.log(list);

for(var i=9; i>=0; i-=1)
{
    list[i].next = list[((i === 0) ? 0 : i-1)];
    console.log (list[i].data + ' points to ' + list[i].next.data);
}

//reverse it
