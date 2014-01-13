<?

$numbers = array(1,1,1,1,2,3,5,4,3,2,4,4,7,8,9,8,6,5,3,3,5,6,5);

foreach ($numbers as $x) {
    $uniq[$x] +=1;
}

//cho $uniq;
ksort($uniq);

foreach ($uniq as $k => $v) {
    echo "$k has $v entries\n";
}

echo PHP_OS . p

function divider($a, $b)
{
  if($b == 0) {
    trigger_error('$b cannot be 0', E_USER_ERROR);
  }

  return($a / $b);
}

echo divider(200, 3);
echo divider(10, 0);

?>