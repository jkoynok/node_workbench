<?
$a = array("fIRst" => 1, "seConD" => 2);
//print_r(array_change_key_case($a,CASE_LOWER));

$b = array('a', 'b', 'c', 'd', 'e', 'f');

//print_r(array_chunk($b,2));

$c = array(1,2,34,5,6,4,4,4,4,3,2,1,2,2,2,3,3,4,5,5,5,6,7,7,8);
//print_r(array_count_values($c));

print_r(array_filter($c, function($x) { return ($x % 2 == 0); }));




?>