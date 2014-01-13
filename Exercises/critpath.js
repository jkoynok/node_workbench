var node = function(d, n) {
    this.data = d;
    this.parent = n;
};

var root = new node(0, null);
root.left = new node(1, root);
root.right = new node(2, root);

root.left.right = new node(3, root.left);
root.left.left = new node(4, root.left);

root.right.right = new node(5, root.right);
root.right.left = new node(6, root.right);

root.left.right.right = new node(7, root.left.right);
root.left.right.left = new node(8, root.left.right);

root.left.left.right = new node(9, root.left.left);
root.left.left.left = new node(10, root.left.left);

var visited = [];
var level1 = [];
var level2 = [];
var level3 = [];
var level = 0;

Get3(root);
console.log(level2);

function Get3(n) {

    if (visited.indexOf(n.data) >= 0) {
        console.log('re-checking ' + n.data);
    }
    else {
        console.log('checking ' + n.data +' at level ' + level);

        //mark level
        switch (level) {
        case 1:
            level1.push(n.data);
            break;
        case 2:
            level2.push(n.data);
            break;
        case 3:
            level3.push(n.data);
            break;
        default:
        }

        visited.push(n.data);
    }

    //check left
    if (n.left && visited.indexOf(n.left.data) < 0) {
        level += 1;
        return Get3(n.left);
    }

    //check right
    if (n.right && visited.indexOf(n.right.data) < 0) {
        level += 1;
        return Get3(n.right);
    }

    //root
    if (!n.parent) return;

    //go back to parent
    level -= 1;
    return Get3(n.parent);

}
