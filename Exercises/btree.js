
var node =function (d) {
    var data = d;
}

var btree = [];
btree.push(new node(0));
btree[0].left = new node(1);
btree[0].right = new node(2);

btree[0].left.right = new node(3);
btree[0].left.left = new node(4);

btree[0].right.right = new node(5);
btree[0].right.left = new node(6);

btree.push(new node())

btree.push({ data: 0});

var addnodes = function(tree) {
    
    if (tree.length >= 10) {
        
        
        
    }
}

