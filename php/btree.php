<?

class Node {

    public $data;
    public $left;
    public $right;
    
    function __construct($d) {
        $this->data = $d;
    }

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
$root->setParent(null);
$root->setLeft(new Node(2));
$root->setRight(new Node(3));
$root->getLeft()->setLeft(new Node(4));
$root->getLeft()->setRight(new Node(5));
$root->getRight()->setLeft(new Node(6));
$root->getRight()->setRight(new Node(7));

//echo $root->getRight()->getRight()->getParent()->getData();

//         1
//     2       3
// 4       5 6     7

$level = 0;
$visited = array();

 function inspect(Node $n) {

    echo 'checking ' . $n->getData() . "\n";

    $visited[$n->getData()] = 1;

    if ($n->getLeft() != Null 
        && 
        array_key_exists($n->getLeft()->getData(),$visited) == false) {
        inspect($n->getLeft());
    }

    if ($n->getRight() != Null
        &&
        array_key_exists($n->getRight()->getData(),$visited) == false) {
        inspect($n->getRight());
    }
    
    if ($n->getParent() != Null) {
    //  return inspect($n->getParent());
    }
 
 }

inspect($root);

?>


