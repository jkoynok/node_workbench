<?

class Node {

    public $data;

    function __construct($d) {
        $this->data = $d;
    }

    public $left;
    public $right;
    
    public function setLeft(Node $n) {
        $this->left = $n;
        $n->parent = this;
    }
    
    public function setRight($n) {
        $this->right = $n;
        $n->setParent($this);
    }
    
    public function getLeft() {
        return $this->left;
    }
    
    public function getRight() {
        return $this->right;
    }
    
    public function setParent($n) {
        $this->parent = $n;
    }
    
    public function getParent() {
        return $this->parent;
    }
    
    public function getData() {
        return $this->data;
    }
}


$root = new Node(1);

$root->setLeft(new Node(2));
$root->setRight(new Node(3));

$root->getLeft()->setLeft(new Node(4));
$root->getLeft()->setRight(new Node(5));

$root->getRight()->setLeft(new Node(6));
$root->getRight()->setRight(new Node(7));

echo $root->getRight()->getRight()->getParent()->getData();

//         1
//     2       3
// 4       5 6     7




?>


